'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="flex max-w-md flex-col items-center space-y-6 text-center">
        <AlertTriangle className="h-24 w-24 text-destructive" />

        <h1 className="text-4xl font-bold tracking-tight">
          Something went wrong
        </h1>

        <h2 className="text-2xl font-semibold text-muted-foreground">
          {error.digest
            ? `Error ID: ${error.digest}`
            : 'An unexpected error occurred'}
        </h2>

        <p className="text-muted-foreground">
          Sorry, an error occurred while rendering this page. Our team has been
          notified.
        </p>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <Button variant="default" onClick={reset}>
            Try again
          </Button>
          <Button
            variant="outline"
            onClick={() => (window.location.href = '/')}
          >
            Return home
          </Button>
        </div>
      </div>
    </div>
  );
}
