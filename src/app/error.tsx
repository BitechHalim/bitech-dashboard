'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertOctagon, LogOut, RefreshCw } from 'lucide-react';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Log the critical error to your error tracking service
    console.error('CRITICAL APPLICATION ERROR:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="flex min-h-screen items-center justify-center bg-background p-4">
          <div className="flex max-w-md flex-col items-center space-y-8 text-center">
            <div className="relative">
              <AlertOctagon className="h-24 w-24 text-destructive" />
            </div>

            <h1 className="text-4xl font-bold tracking-tight">
              Critical Error
            </h1>

            <h2 className="text-xl font-semibold text-muted-foreground">
              {error.digest
                ? `Error ID: ${error.digest}`
                : 'Application failure'}
            </h2>

            <p className="text-muted-foreground">
              A critical error has occurred in the application. Our technical
              team has been notified and is working to resolve the issue. Your
              data is safe and no information has been lost.
            </p>

            <div className="mt-6 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
              <Button
                variant="default"
                onClick={reset}
                className="w-full gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                Restart application
              </Button>
              <Button
                variant="outline"
                onClick={() => (window.location.href = '/login')}
                className="w-full gap-2"
              >
                <LogOut className="h-4 w-4" />
                Return to login
              </Button>
            </div>

            <div className="mt-6 text-sm text-muted-foreground">
              <p>
                If the problem persists, please contact support at{' '}
                <span className="font-medium">support@yourcompany.com</span>
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
