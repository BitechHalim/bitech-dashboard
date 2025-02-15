import React from 'react';
import ClientTable from '@/services/client-management/components/ClientTable';

const ClientList = () => {
  return (
    <div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold tracking-tight">Client Management</h2>
        <p className="text-muted-foreground">
          Manage your clients efficiently and effectively
        </p>
      </div>
      <ClientTable />
    </div>
  );
};

export default ClientList;
