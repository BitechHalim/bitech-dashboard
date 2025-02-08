import React from 'react';
import StoreProvider from '@/lib/providers/StoreProvider';
import QueryProvider from '@/lib/providers/QueryProvider';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <QueryProvider>{children}</QueryProvider>
    </StoreProvider>
  );
};

export default Providers;
