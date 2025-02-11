'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { useForm } from '@tanstack/react-form';
import { loginSchema } from '@/services/authentication/schemas/login.schema';
import {
  LoginHeader,
  SignUpPrompt,
} from '@/services/authentication/components/parts';
import { useRouter } from 'next/navigation';
import {
  EmailField,
  PasswordField,
  SubmitButton,
} from '@/components/forms/FormElements/Fields';
import { FormProps } from '@/components/forms/FormElements/types';

export function LoginForm({ className, ...props }: FormProps) {
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    validators: {
      onChangeAsyncDebounceMs: 1000,
      onChangeAsync: loginSchema,
      onSubmit: loginSchema,
    },
    onSubmit: async ({ value }) => {
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
      <LoginHeader />

      <div className="grid gap-6">
        <form.Field name="email">
          {field => <EmailField field={field} />}
        </form.Field>

        <form.Field name="password">
          {field => <PasswordField field={field} />}
        </form.Field>

        <form.Subscribe
          selector={state => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => (
            <SubmitButton canSubmit={canSubmit} isSubmitting={isSubmitting} />
          )}
        </form.Subscribe>
      </div>

      <SignUpPrompt />
    </form>
  );
}
