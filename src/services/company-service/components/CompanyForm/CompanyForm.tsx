'use client';
import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useForm } from '@tanstack/react-form';
import { useRouter } from 'next/navigation';
import {
  SubmitButton,
  TextField,
} from '@/components/forms/FormElements/Fields';
import { FormProps } from '@/components/forms/FormElements/types';
import { companySchema } from '@/services/company-service/schemas/company.schema';
import { DateTimePicker } from '@/components/forms/DateTimePicker/DateTimerPicker';
import {
  selectCompanyId,
  setCompanyId,
} from '@/services/company-service/store/companySlice';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';

export function CompanyForm({ className, ...props }: FormProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const companyId = useAppSelector(selectCompanyId);

  useEffect(() => {
    if (companyId) {
      dispatch(setCompanyId(companyId));
      // Placeholder: Fetch company data using the companyId
      console.log(`Fetching company data for ID: ${companyId}`);
    }
  }, [companyId, dispatch]);

  const form = useForm({
    defaultValues: {
      company_name: '',
      contact_email: '',
      subscription_id: '',
      created_at: '',
      updated_at: '',
    },
    validators: {
      onChangeAsyncDebounceMs: 1000,
      onChangeAsync: companySchema,
    },
    onSubmit: ({ value }) => {
      console.log(value);
      router.push('/home');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn('flex flex-col gap-6', className)}
      {...props}
    >
      <div className="grid gap-6">
        <form.Field name="company_name">
          {field => <TextField label="Company Name" field={field} />}
        </form.Field>

        <form.Field name="contact_email">
          {field => <TextField label="Contact Email" field={field} />}
        </form.Field>

        <form.Field name="subscription_id">
          {field => <TextField label="Subscription ID" field={field} />}
        </form.Field>

        <form.Field name="created_at">
          {field => (
            <DateTimePicker
              value={field.state.value}
              onChange={field.handleChange}
            />
          )}
        </form.Field>

        <form.Field name="updated_at">
          {field => (
            <DateTimePicker
              value={field.state.value}
              onChange={field.handleChange}
            />
          )}
        </form.Field>

        <form.Subscribe
          selector={state => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => (
            <SubmitButton canSubmit={canSubmit} isSubmitting={isSubmitting} />
          )}
        </form.Subscribe>
      </div>
    </form>
  );
}
