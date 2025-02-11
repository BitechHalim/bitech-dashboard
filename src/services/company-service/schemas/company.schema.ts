import { z } from 'zod';

export const companySchema = z.object({
  company_name: z
    .string()
    .min(2, 'Company name must be at least 2 characters long'),
  contact_email: z.string().email('Invalid email format'),
  subscription_id: z.string().min(1, 'Subscription ID is required'),
  created_at: z.string(),
  updated_at: z.string(),
});
