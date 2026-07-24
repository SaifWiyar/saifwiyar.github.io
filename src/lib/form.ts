export const MAX_ATTACHMENT_BYTES = 10 * 1024 * 1024;
export const ACCEPTED_FILE_TYPES = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/png', 'image/jpeg'];

export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  country: string;
  company: string;
  subject: string;
  budget: string;
  message: string;
  website: string;
}

export function validateContact(values: ContactFormValues, file?: File | null) {
  const errors: Partial<Record<keyof ContactFormValues | 'attachment', string>> = {};
  if (values.name.trim().length < 2) errors.name = 'Please enter your full name.';
  if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = 'Please enter a valid email.';
  if (values.country.trim().length < 2) errors.country = 'Please enter your country.';
  if (values.subject.trim().length < 3) errors.subject = 'Please enter a clear subject.';
  if (values.message.trim().length < 20) errors.message = 'Please provide at least 20 characters.';
  if (file && file.size > MAX_ATTACHMENT_BYTES) errors.attachment = 'Attachment must be 10 MB or smaller.';
  if (file && !ACCEPTED_FILE_TYPES.includes(file.type)) errors.attachment = 'Unsupported attachment type.';
  return errors;
}
