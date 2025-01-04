import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  // Parse the form data from the request body
  const { name, company, email, phone, message } = await request.json();

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'AOL', // Use 'AOL' for AOL email
    auth: {
      user: process.env.EMAIL_USER, // Your AOL email address
      pass: process.env.EMAIL_PASS, // Your AOL email password or app password
    },
  });

  // Define the email content
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender address
    to: 'jsdinc@aol.com', // Recipient address
    subject: `New Contact Form Submission from ${name}`, // Email subject
    text: `
      Name: ${name}
      Company: ${company}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `, // Plain text body
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}