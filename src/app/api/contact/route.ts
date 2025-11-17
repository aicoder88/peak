import { NextResponse } from 'next/server';
import { google } from 'googleapis';

async function appendToGoogleSheet(name: string, email: string, phone: string, location: string, scheduleEvaluation: boolean, message: string) {
  try {
    const serviceAccountKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;

    if (!serviceAccountKey || !spreadsheetId) {
      return false;
    }

    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(serviceAccountKey),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const timestamp = new Date().toLocaleString();

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:G',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[timestamp, name, email, phone || 'N/A', location || 'N/A', scheduleEvaluation ? 'Yes' : 'No', message || 'N/A']],
      },
    });

    console.log('Successfully appended to Google Sheet:', response.data);
    return true;
  } catch (error) {
    console.error('Error writing to Google Sheet:', error);
    return false;
  }
}

async function sendEmailViaResend(name: string, email: string, phone: string, location: string, scheduleEvaluation: boolean, message: string) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      return false;
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Peak Life Performance <onboarding@resend.dev>',
        to: process.env.CONTACT_EMAIL || 'peaklifeperformance@gmail.com',
        subject: `New Consultation Request from ${name}`,
        html: `
          <h2>New Consultation Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Location:</strong> ${location || 'Not provided'}</p>
          <p><strong>Schedule Evaluation:</strong> ${scheduleEvaluation ? 'Yes' : 'No'}</p>
          <p><strong>Message:</strong></p>
          <p>${message || 'No message provided'}</p>
        `,
      }),
    });

    if (!response.ok) {
      console.error('Failed to send email via Resend');
      return false;
    }

    console.log('Successfully sent email via Resend');
    return true;
  } catch (error) {
    console.error('Error sending email via Resend:', error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, location, scheduleEvaluation, message } = body;

    // Validate required fields
    if (!name || !email || !location) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Try Google Sheets first, then fallback to email
    const sheetSuccess = await appendToGoogleSheet(name, email, phone, location, scheduleEvaluation, message);

    if (sheetSuccess) {
      // Also try to send email as backup notification
      await sendEmailViaResend(name, email, phone, location, scheduleEvaluation, message);
      return NextResponse.json({ success: true, method: 'google-sheets' });
    }

    // Fallback to email only
    const emailSuccess = await sendEmailViaResend(name, email, phone, location, scheduleEvaluation, message);

    if (emailSuccess) {
      return NextResponse.json({ success: true, method: 'email' });
    }

    // Log submission if nothing else worked
    console.warn('No storage method configured. Logging submission:', { name, email, phone, location, scheduleEvaluation, message });
    return NextResponse.json({
      success: true,
      message: 'Form submitted (no notification configured)'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
