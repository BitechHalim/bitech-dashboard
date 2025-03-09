'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';
import Link from 'next/link';

const NotFoundPage = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="flex max-w-md flex-col items-center space-y-6 text-center">
        <AlertCircle className="h-24 w-24 text-muted-foreground" />

        <h1 className="text-4xl font-bold tracking-tight">404</h1>

        <h2 className="text-2xl font-semibold text-muted-foreground">
          Page not found
        </h2>

        <p className="text-muted-foreground">
          Sorry, we couldn&#39;t find the page you&#39;re looking for. The page
          might have been moved, deleted, or never existed.
        </p>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <Button variant="default" onClick={handleGoBack}>
            Go back
          </Button>
          <Link href="/">
            <Button variant="outline">Return home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
