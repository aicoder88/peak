import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (!resendApiKey) {
      console.warn('RESEND_API_KEY not configured - logging contact form submission instead');
      console.log('Contact Form Submission:', { name, email, phone, message });
      
      // Return success even without email sending for now
      return NextResponse.json({ 
        success: true,
        message: 'Form submitted successfully (email not configured)' 
      });
    }

    // Send email using Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Peak Life Performance <onboarding@resend.dev>',
        to: process.env.CONTACT_EMAIL || 'info@peaklifeperformance.com',
        subject: `New Consultation Request from ${name}`,
        html: `
          <h2>New Consultation Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Goals:</strong></p>
          <p>${message}</p>
        `,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
