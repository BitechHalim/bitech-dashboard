'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { useForm } from '@tanstack/react-form';
import {
  LoginHeader,
  SignInPrompt,
} from '@/services/authentication/components/parts';
import { registerSchema } from '@/services/authentication/schemas/register.schema';
import {
  ConfirmPasswordField,
  EmailField,
  PasswordField,
  SubmitButton,
  TextField,
} from '@/components/forms/FormElements/Fields';
import { FormProps } from '@/components/forms/FormElements/types';

export function RegisterForm({ className, ...props }: FormProps) {
  const form = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirm_password: '',
    },
    validators: {
      onChangeAsyncDebounceMs: 1000,
      onChangeAsync: registerSchema,
      onSubmit: registerSchema,
    },
    onSubmit: async ({ value }) => {
      console.log(value);
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
      <LoginHeader />

      <div className="grid gap-6">
        <form.Field name="username">
          {field => <TextField label={'Username'} field={field} />}
        </form.Field>

        <form.Field name="email">
          {field => <EmailField field={field} />}
        </form.Field>

        <form.Field name="password">
          {field => <PasswordField field={field} />}
        </form.Field>

        <form.Field name="confirm_password">
          {field => <ConfirmPasswordField field={field} />}
        </form.Field>

        <form.Subscribe
          selector={state => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => (
            <SubmitButton canSubmit={canSubmit} isSubmitting={isSubmitting} />
          )}
        </form.Subscribe>
      </div>

      <SignInPrompt />
    </form>
  );
}
