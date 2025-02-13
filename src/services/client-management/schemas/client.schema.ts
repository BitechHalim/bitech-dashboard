import { z } from 'zod';

export const clientSchema = z.object({
  client_name: z
    .string()
    .min(2, 'Client name must be at least 2 characters')
    .max(100, 'Client name must not exceed 100 characters'),

  company_id: z.string().min(1, 'Company ID is required'),

  client_email: z
    .string()
    .email('Invalid email address')
    .min(5, 'Email must be at least 5 characters')
    .max(254, 'Email must not exceed 254 characters'),

  created_at: z.string(),
  updated_at: z.string(),

  permissions: z.array(z.string()).optional(),
});
