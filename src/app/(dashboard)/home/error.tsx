'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Home, RefreshCw } from 'lucide-react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function HomeError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Home dashboard error:', error);
  }, [error]);

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center bg-background p-4">
      <div className="flex max-w-md flex-col items-center space-y-6 text-center">
        <div className="relative">
          <Home className="h-20 w-20 text-muted-foreground" />
          <div className="absolute right-0 top-0 rounded-full bg-destructive p-1 text-destructive-foreground">
            <span className="text-xl font-bold">!</span>
          </div>
        </div>

        <h1 className="text-3xl font-bold tracking-tight">Dashboard Error</h1>

        <h2 className="text-xl font-semibold text-muted-foreground">
          {error.digest
            ? `Error ID: ${error.digest}`
            : 'Dashboard loading error'}
        </h2>

        <p className="text-muted-foreground">
          We&#39;re having trouble loading your dashboard. This might be because
          of a connectivity issue or because some services are currently
          unavailable. Your data is safe.
        </p>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <Button variant="default" onClick={reset} className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Refresh dashboard
          </Button>
          <Button
            variant="outline"
            onClick={() => (window.location.href = '/login')}
          >
            Return to login
          </Button>
        </div>
      </div>
    </div>
  );
}
