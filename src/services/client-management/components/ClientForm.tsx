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
import { DateTimePicker } from '@/components/forms/DateTimePicker/DateTimerPicker';
import {
  selectClientId,
  setClientId,
} from '@/services/client-management/store/clientSlice';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { clientSchema } from '@/services/client-management/schemas/client.schema';
import { DropDown } from '@/components/forms/DropDown/DropDown';
import { Checkbox } from '@/components/forms/Checkbox/Checkbox';

const COMPANY_OPTIONS = [
  { label: 'Company A', value: 'COMP_001' },
  { label: 'Company B', value: 'COMP_002' },
  { label: 'Company C', value: 'COMP_003' },
];

const PERMISSION_OPTIONS = [
  { label: 'Read Access', value: 'read' },
  { label: 'Write Access', value: 'write' },
  { label: 'Admin Access', value: 'admin' },
];

export function ClientForm({ className, ...props }: FormProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const clientId = useAppSelector(selectClientId);

  useEffect(() => {
    if (clientId) {
      dispatch(setClientId(clientId));
      console.log(`Fetching client data for ID: ${clientId}`);
    }
  }, [clientId, dispatch]);

  const form = useForm({
    defaultValues: {
      client_name: '',
      company_id: '',
      client_email: '',
      created_at: '',
      updated_at: '',
      permissions: [],
    },
    validators: {
      onChangeAsyncDebounceMs: 1000,
      onChangeAsync: clientSchema,
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
        <form.Field name="client_name">
          {field => <TextField label="Client Name" field={field} />}
        </form.Field>

        <form.Field name="company_id">
          {field => (
            <DropDown
              label="Company ID"
              options={COMPANY_OPTIONS}
              placeholder="Select a company"
              value={field.state.value}
              onChange={field.handleChange}
            />
          )}
        </form.Field>

        <form.Field name="client_email">
          {field => <TextField label="Client Email" field={field} />}
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

        <form.Field name="permissions">
          {field => (
            <div>
              <label className="text-sm font-medium">Permissions</label>
              <div className="flex flex-col gap-2">
                {PERMISSION_OPTIONS.map(option => (
                  <Checkbox
                    key={option.value}
                    id={option.value}
                    label={option.label}
                    checked={field.state.value?.includes(option.value) ?? false}
                    onCheckedChange={checked => {
                      const newPermissions = checked
                        ? [...(field.state.value ?? []), option.value]
                        : (field.state.value ?? []).filter(
                            p => p !== option.value,
                          );
                      field.handleChange(newPermissions);
                    }}
                  />
                ))}
              </div>
            </div>
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
