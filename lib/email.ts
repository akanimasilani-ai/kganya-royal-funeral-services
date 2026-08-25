import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: parseInt(process.env.EMAIL_SERVER_PORT || '587'),
  secure: process.env.EMAIL_SERVER_PORT === '465',
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
});

export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail(options: EmailOptions) {
  try {
    const result = await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'noreply@kganyaroyal.co.za',
      to: options.to,
      subject: options.subject,
      html: options.html,
    });
    
    return result;
  } catch (error) {
    console.error('Email sending error:', error);
    throw new Error('Failed to send email');
  }
}

export const emailTemplates = {
  registrationConfirmation: (name: string, email: string) => `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1e3a5f;">Welcome to Kganya Royal Funeral Services</h2>
      <p>Dear ${name},</p>
      <p>Thank you for registering with Kganya Royal Funeral Services. Your account has been successfully created.</p>
      <p>You can now:</p>
      <ul>
        <li>Apply for funeral cover packages</li>
        <li>Request quotes for our services</li>
        <li>Enquire about catering options</li>
        <li>Track your applications and requests</li>
      </ul>
      <p>If you have any questions, please don't hesitate to contact us.</p>
      <p>Best regards,<br>Kganya Royal Funeral Services Team</p>
    </div>
  `,
  
  applicationSubmitted: (name: string, referenceNumber: string) => `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1e3a5f;">Application Submitted Successfully</h2>
      <p>Dear ${name},</p>
      <p>Thank you for submitting your application to Kganya Royal Funeral Services.</p>
      <p><strong>Reference Number: ${referenceNumber}</strong></p>
      <p>We have received your application and it is now under review. We will contact you shortly with updates on the status of your application.</p>
      <p>Please keep your reference number safe for future correspondence.</p>
      <p>Best regards,<br>Kganya Royal Funeral Services Team</p>
    </div>
  `,
  
  applicationStatusChanged: (name: string, referenceNumber: string, newStatus: string) => `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1e3a5f;">Application Status Update</h2>
      <p>Dear ${name},</p>
      <p>Your application (Reference: ${referenceNumber}) status has been updated.</p>
      <p><strong>New Status: ${newStatus}</strong></p>
      <p>Please log in to your account to view more details about your application.</p>
      <p>Best regards,<br>Kganya Royal Funeral Services Team</p>
    </div>
  `,
  
  quoteRequestReceived: (name: string, referenceNumber: string) => `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1e3a5f;">Quote Request Received</h2>
      <p>Dear ${name},</p>
      <p>Thank you for requesting a quote from Kganya Royal Funeral Services.</p>
      <p><strong>Reference Number: ${referenceNumber}</strong></p>
      <p>Our team will review your request and contact you shortly with a detailed quote.</p>
      <p>Best regards,<br>Kganya Royal Funeral Services Team</p>
    </div>
  `,
};
