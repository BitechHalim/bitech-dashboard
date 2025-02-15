import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FieldApi } from '@tanstack/form-core';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface FieldProps {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  field: FieldApi<any, any, any, any>;
}

interface FormFieldProps {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  field: FieldApi<any, any, any, any>;
  label: string;
  type: 'email' | 'password' | 'text';
  id: string;
  placeholder?: string;
  rightElement?: React.ReactNode;
}

export function FormField({
  field,
  label,
  type,
  id,
  placeholder,
  rightElement,
}: FormFieldProps) {
  return (
    <div className="grid gap-2">
      <div className="flex items-center">
        <Label htmlFor={id}>{label}</Label>
        {rightElement}
      </div>
      <Input
        id={id}
        type={type}
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={e => field.handleChange(e.target.value)}
        placeholder={placeholder}
        required
      />
      <FieldInfo field={field} />
    </div>
  );
}

export function UserField({ field }: FieldProps) {
  return (
    <FormField
      field={field}
      label="Username"
      type="text"
      id="username"
      placeholder="m@example.com"
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

const FieldInfo = ({ field }: FieldProps) => {
  return (
    <div className="text-xs text-red-600">
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <em>{field.state.meta.errors.join(', ')}</em>
      ) : null}
      {field.state.meta.isValidating ? (
        <span className="text-blue-600">Validating...</span>
      ) : null}
    </div>
  );
};

export function LoginHeader() {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <h1 className="text-2xl font-bold">Login to your account</h1>
      <p className="text-balance text-sm text-muted-foreground">
        Enter your email below to login to your account
      </p>
    </div>
  );
}

export function SignUpPrompt() {
  return (
    <div className="text-center text-sm">
      Don&apos;t have an account?{' '}
      <Link href="/sign-up" className="underline underline-offset-4">
        Sign up
      </Link>
    </div>
  );
}
export function SignInPrompt() {
  return (
    <div className="text-center text-sm">
      Don&apos;t have an account?{' '}
      <Link href="/sign-in" className="underline underline-offset-4">
        Sign in
      </Link>
    </div>
  );
}

interface SubmitButtonProps {
  canSubmit: boolean;
  isSubmitting: boolean;
}

export function SubmitButton({ canSubmit, isSubmitting }: SubmitButtonProps) {
  return (
    <Button type="submit" disabled={!canSubmit} className="w-full">
      {isSubmitting ? '...' : 'Submit'}
    </Button>
  );
}
