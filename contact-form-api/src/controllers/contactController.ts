import { Request, Response } from 'express';
import { sendEmail } from '../utils/emailService';
import { ContactMessage } from '../types';

export const submitContact = async (req: Request, res: Response) => {
  try {
    const contactData: ContactMessage = req.body;
    
    if (!contactData.name || !contactData.email || !contactData.message) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const emailSent = await sendEmail(contactData);

    if (emailSent) {
      return res.status(200).json({ success: true, message: 'Message sent successfully' });
    } else {
      return res.status(500).json({ success: false, message: 'Failed to send message' });
    }
  } catch (error) {
    console.error('Contact submission error:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};