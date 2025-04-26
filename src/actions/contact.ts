
'use server';

import { z } from 'zod';
import { Resend } from 'resend';

// Define the schema for the contact form data using Zod
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

// Initialize Resend client conditionally
let resend: Resend | null = null;
const resendApiKey = process.env.RESEND_API_KEY;
if (resendApiKey) {
    resend = new Resend(resendApiKey);
} else {
    console.warn('Resend API key (RESEND_API_KEY) is not configured in environment variables. Email sending will be disabled.');
}

const contactEmailTo = process.env.CONTACT_EMAIL_TO;
const contactEmailFrom = process.env.CONTACT_EMAIL_FROM;

/**
 * Server action to handle the submission of the contact form.
 * Sends an email using Resend to the configured recipient address.
 *
 * @param formData The raw form data (will be validated internally).
 * @returns A promise that resolves with an object indicating success or failure, including an error message if applicable.
 */
export async function submitContactForm(formData: unknown): Promise<{ success: boolean; message: string }> {
  // Validate the input data against the schema
  const validatedData = contactFormSchema.safeParse(formData);

  if (!validatedData.success) {
    console.error('Invalid contact form data:', validatedData.error.flatten().fieldErrors);
    // Extract a user-friendly message from the validation errors if possible
    const firstError = validatedData.error.errors[0]?.message || 'Invalid form data provided.';
    return { success: false, message: firstError };
  }

  // Check if Resend is configured and ready
  if (!resend) {
    console.error('Email service (Resend) is not configured correctly because RESEND_API_KEY is missing.');
    // Provide a user-friendly error message
    return { success: false, message: 'Email service is not configured. Please contact support.' };
  }

  if (!contactEmailTo) {
    console.error('Recipient email address (CONTACT_EMAIL_TO) is not set in environment variables.');
    return { success: false, message: 'Email configuration error (recipient missing). Please contact support.' };
  }

  if (!contactEmailFrom) {
    console.error('Sender email address (CONTACT_EMAIL_FROM) is not set in environment variables.');
    return { success: false, message: 'Email configuration error (sender missing). Please contact support.' };
  }

  const { name, email, subject, message } = validatedData.data;

  try {
    console.log(`Attempting to send email from ${contactEmailFrom} to ${contactEmailTo}...`);
    const { data, error } = await resend.emails.send({
      from: contactEmailFrom, // Use configured sender (must be verified in Resend)
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
      // Provide a more specific error if possible, otherwise generic
      let errorMessage = 'Failed to send message due to a server error. Please try again later.';
      if (error.message.includes('Invalid `from` address')) {
        errorMessage = 'Email configuration error (invalid sender). Please contact support.';
      } else if (error.message.includes('Invalid `to` address')) {
         errorMessage = 'Email configuration error (invalid recipient). Please contact support.';
      }
      return { success: false, message: errorMessage };
    }

    console.log('Email sent successfully:', data);
    return { success: true, message: 'Message sent successfully!' };

  } catch (error) {
    console.error('Exception caught while sending email:', error);
    // Handle unexpected errors
    let errorMessage = 'An unexpected error occurred while sending the message.';
     if (error instanceof Error) {
         // You might want to log error.message for more details server-side
         // but keep the client message generic unless it's a known configuration issue.
         if (error.message.includes('configuration error')) {
            errorMessage = error.message; // Propagate specific config errors
         }
    }
    return { success: false, message: errorMessage };
  }
}
