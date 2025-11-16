import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if Resend API key is available
    const apiKey = process.env.RESEND_API_KEY;
    
    if (!apiKey) {
      // Demo mode - no API key provided
      console.log('Demo mode: Contact form submission received', { name, email, phone, message });
      return NextResponse.json(
        { success: true, messageId: 'demo-message-id' },
        { status: 200 }
      );
    }

    // Send email using Resend
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: 'Peak Life Performance <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL || 'PLP@peaklifeperformance.com'],
      subject: `New Consultation Request from ${name}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No message provided'}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
