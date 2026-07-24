import type { LocalizedText } from '../types';

export interface Testimonial {
  name: string;
  role: LocalizedText;
  quote: LocalizedText;
  verified: boolean;
}

// Add only genuine, permission-approved testimonials. The section stays hidden while this array is empty.
export const testimonials: Testimonial[] = [];
