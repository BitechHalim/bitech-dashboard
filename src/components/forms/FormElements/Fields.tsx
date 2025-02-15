import {
  FieldProps,
  SubmitButtonProps,
} from '@/components/forms/FormElements/types';
import { FormField } from '@/components/forms/FormElements/FormField';
import React from 'react';
import { Button } from '@/components/ui/button';

export function TextField({ field, label }: FieldProps & { label: string }) {
  return (
    <FormField
      field={field}
      label={label}
      type="text"
      id={label.toLowerCase().replace(' ', '_')}
    />
  );
}

export function EmailField({ field }: FieldProps) {
  return (
    <FormField
      field={field}
      label="Email"
      type="email"
      id="email"
      placeholder="m@example.com"
    />
  );
}

export function PasswordField({ field }: FieldProps) {
  const forgotPasswordLink = (
    <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
      Forgot your password?
    </a>
  );

  return (
    <FormField
      field={field}
      label="Password"
      type="password"
      id="password"
      rightElement={forgotPasswordLink}
    />
  );
}

export function ConfirmPasswordField({ field }: FieldProps) {
  return (
    <FormField
      field={field}
      label="Confirm Password"
      type="password"
      id="confirm_password"
    />
  );
}

export function SubmitButton({ canSubmit, isSubmitting }: SubmitButtonProps) {
  return (
    <Button type="submit" disabled={!canSubmit} className="w-full">
      {isSubmitting ? '...' : 'Submit'}
    </Button>
  );
}
