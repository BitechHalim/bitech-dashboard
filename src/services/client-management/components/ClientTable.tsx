'use client';

import React, { useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Calendar, Mail, Tag, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DetailedListTable } from '@/components/tables/core/DetailedListTable/DetailedListTable';
import { formatDate } from '@/components/tables/core/utils';
import { BaseDataType } from '@/components/tables/core/CompactListTable/CompactListTable.types';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/lib/store/hooks';
import { DialogModal } from '@/components/Dialogs/DialogModal';
import { setClientId } from '@/services/client-management/store/clientSlice';
import { FakeClientsData } from '@/services/client-management/fake-db';

interface Client extends BaseDataType {
  client_id: string;
  company_id: string;
  client_name: string;
  client_email: string;
  created_at: string;
  updated_at: string;
}

const ClientTable: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedClientId, setSelectedClientId] = useState<
    string | number | null
  >(null);

  const handleClientDelete = (id: string | number) => {
    setSelectedClientId(id);
    setIsDialogOpen(true);
  };

  const confirmDelete = () => {
    if (selectedClientId) {
      console.log(`Deleting client with ID: ${selectedClientId}`);
      // API Call placeholder to delete client
    }
    setIsDialogOpen(false);
  };

  const handleClientEdit = (id: string | number) => {
    dispatch(setClientId(id));
    router.push(`/client-management/edit/${id}`);
  };

  const columns: ColumnDef<Client>[] = [
    {
      accessorKey: 'client_name',
      header: 'Client',
      cell: ({ row }) => (
        <div className="flex flex-col">
          <span className="font-medium">{row.original.client_name}</span>
          <span className="text-sm text-muted-foreground">
            {row.original.client_id}
          </span>
        </div>
      ),
    },
    {
      accessorKey: 'client_email',
      header: 'Contact',
      cell: ({ row }) => (
        <div className="flex items-center gap-1">
          <Mail className="h-4 w-4 text-muted-foreground" />
          <span>{row.original.client_email}</span>
        </div>
      ),
    },
    {
      accessorKey: 'company_id',
      header: 'Company ID',
      cell: ({ row }) => (
        <span className="text-sm">{row.original.company_id}</span>
      ),
    },
    {
      accessorKey: 'dates',
      header: 'Dates',
      cell: ({ row }) => (
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>Created {formatDate(row.original.created_at)}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Tag className="h-4 w-4" />
            <span>Updated {formatDate(row.original.updated_at)}</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <DetailedListTable
        data={FakeClientsData} // Replace with your clients data
        columns={columns}
        createButtonProps={{
          href: '/client-management/add',
          text: 'Add Client',
        }}
        searchPlaceholder="Search clients..."
        renderBulkActions={({ table }) => {
          const selectedRows = table.getSelectedRowModel().rows;

          return selectedRows.length > 0 ? (
            <div className="flex items-center space-x-2">
              <Button
                variant="destructive"
                onClick={() => {
                  const selectedIds = selectedRows.map(row => row.original.id);
                  // Delete Rows with selectedIds
                  console.log(selectedIds);
                  table.resetRowSelection();
                }}
              >
                <Trash className="mr-2 h-4 w-4" />
                Delete {selectedRows.length} Client
                {selectedRows.length > 1 ? 's' : ''}
              </Button>
            </div>
          ) : null;
        }}
        actions={{
          handleDelete: id => handleClientDelete(id),
          handleEdit: id => handleClientEdit(id),
        }}
      />
      <DialogModal
        title="Confirm Deletion"
        description="Are you sure you want to delete this client? This action cannot be undone."
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onConfirm={confirmDelete}
      />
    </>
  );
};

export default ClientTable;
