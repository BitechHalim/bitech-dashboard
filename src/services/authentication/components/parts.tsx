import React from 'react';
import Link from 'next/link';

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
