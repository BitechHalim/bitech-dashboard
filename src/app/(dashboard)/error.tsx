'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw, Settings } from 'lucide-react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ServiceManagementError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Service management error:', error);
  }, [error]);

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center bg-background p-4">
      <div className="flex max-w-md flex-col items-center space-y-6 text-center">
        <div className="relative">
          <Settings className="h-20 w-20 text-muted-foreground" />
          <div className="absolute right-0 top-0 rounded-full bg-destructive p-1 text-destructive-foreground">
            <span className="text-xl font-bold">!</span>
          </div>
        </div>

        <h1 className="text-3xl font-bold tracking-tight">
          Service Configuration Error
        </h1>

        <h2 className="text-xl font-semibold text-muted-foreground">
          {error.digest ? `Error ID: ${error.digest}` : 'Service unavailable'}
        </h2>

        <p className="text-muted-foreground">
          There was a problem loading the service management interface. This
          could be due to a configuration issue or temporary service outage.
          Recent configuration changes are still preserved.
        </p>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <Button variant="default" onClick={reset} className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Retry
          </Button>
          <Button
            variant="outline"
            onClick={() => (window.location.href = '/dashboard')}
          >
            Back to dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}
