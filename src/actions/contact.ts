
'use server';

import { z } from 'zod';
import { Resend } from 'resend';

// Define the schema for the contact form data using Zod
const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

// Initialize Resend client only if API key is available
let resend: Resend | null = null;
if (process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY);
}

const contactEmailTo = process.env.CONTACT_EMAIL_TO;
const contactEmailFrom = process.env.CONTACT_EMAIL_FROM;

/**
 * Server action to handle the submission of the contact form.
 * Sends an email using Resend to the configured recipient address.
 *
 * @param formData The validated contact form data.
 * @returns A promise that resolves when the action is complete or rejects on error.
 */
export async function submitContactForm(formData: ContactFormData): Promise<void> {
  // Validate the input data against the schema
  const validatedData = contactFormSchema.safeParse(formData);

  if (!validatedData.success) {
    console.error('Invalid contact form data:', validatedData.error.flatten().fieldErrors);
    throw new Error('Invalid form data provided.');
  }

  // Check if Resend API key is configured
  if (!resend) {
    console.error('Resend API key (RESEND_API_KEY) is not configured in environment variables.');
    // Provide a user-friendly error message
    throw new Error('Email service is not configured correctly. Please contact the site administrator.');
  }

  if (!contactEmailTo) {
    console.error('Recipient email address (CONTACT_EMAIL_TO) is not set in environment variables.');
    throw new Error('Email configuration error. Please contact the site administrator.');
  }

  if (!contactEmailFrom) {
    console.error('Sender email address (CONTACT_EMAIL_FROM) is not set in environment variables.');
    // Throw error to prevent sending without a verified sender
    throw new Error('Email configuration error. Please contact the site administrator.');
  }


  const { name, email, subject, message } = validatedData.data;

  try {
    console.log(`Attempting to send email from ${contactEmailFrom} to ${contactEmailTo}...`);
    const { data, error } = await resend.emails.send({
      from: contactEmailFrom, // Use configured sender
      to: [contactEmailTo], // Recipient email from env var
      subject: `New Contact Form Submission: ${subject}`,
      reply_to: email, // Set the user's email as the reply-to address
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Error sending email via Resend:', error);
      throw new Error('Failed to send message. Please try again later.');
    }

    console.log('Email sent successfully:', data);
    // Indicate successful processing (no return value needed for simple cases)

  } catch (error) {
    console.error('Exception caught while sending email:', error);
    // Re-throw a user-friendly error for the client
    if (error instanceof Error && (error.message.startsWith('Failed to send message') || error.message.includes('Email configuration error') || error.message.includes('Email service is not configured'))) {
        throw error; // Propagate specific, user-friendly errors
    }
    throw new Error('An unexpected error occurred while sending the message.');
  }
}

