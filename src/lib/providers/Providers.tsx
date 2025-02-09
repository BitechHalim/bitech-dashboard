import React from 'react';
import StoreProvider from '@/lib/providers/StoreProvider';
import QueryProvider from '@/lib/providers/QueryProvider';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { ThemeProvider } from '@/components/ui/theme-provider';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <QueryProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </QueryProvider>
    </StoreProvider>
  );
};

export default Providers;
