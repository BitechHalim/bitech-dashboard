'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { useForm } from '@tanstack/react-form';
import {
  ConfirmPasswordField,
  EmailField,
  LoginHeader,
  PasswordField,
  SignInPrompt,
  SubmitButton,
  UserField,
} from '@/services/authentication/components/parts';
import { registerSchema } from '@/services/authentication/schemas/register.schema';

interface RegisterFormProps extends React.ComponentPropsWithoutRef<'form'> {
  className?: string;
}

export function RegisterForm({ className, ...props }: RegisterFormProps) {
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
          {field => <UserField field={field} />}
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
