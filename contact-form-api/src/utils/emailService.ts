import nodemailer from 'nodemailer';
import { emailConfig } from '../config/email';
import { ContactMessage } from '../types';

const transporter = nodemailer.createTransport(emailConfig);

export const sendEmail = async (contactData: ContactMessage) => {
  const mailOptions = {
    from: contactData.email,
    to: process.env.SMTP_USER,
    subject: `New Contact Form Message from ${contactData.name}`,
    text: contactData.message,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${contactData.name}</p>
      <p><strong>Email:</strong> ${contactData.email}</p>
      <p><strong>Message:</strong></p>
      <p>${contactData.message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};