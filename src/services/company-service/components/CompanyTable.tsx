'use client';

import React, { useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Calendar, Mail, Tag, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DetailedListTable } from '@/components/tables/core/DetailedListTable/DetailedListTable';
import { formatDate } from '@/components/tables/core/utils';
import { BaseDataType } from '@/components/tables/core/CompactListTable/CompactListTable.types';
import { Companies } from '@/services/company-service/fake-db/companies';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/lib/store/hooks';
import { setCompanyId } from '@/services/company-service/store/companySlice';
import { DialogModal } from '@/components/Dialogs/DialogModal';

interface Company extends BaseDataType {
  company_id: string;
  company_name: string;
  contact_email: string;
  subscription_id: string;
  created_at: string;
  updated_at: string;
}

const CompanyTable: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCompanyId, setSelectedCompanyId] = useState<
    string | number | null
  >(null);

  const handleCompanyDelete = (id: string | number) => {
    setSelectedCompanyId(id);
    setIsDialogOpen(true);
  };

  const confirmDelete = () => {
    if (selectedCompanyId) {
      console.log(`Deleting company with ID: ${selectedCompanyId}`);
      // API Call placeholder to delete company
    }
    setIsDialogOpen(false);
  };

  const handleCompanyEdit = (id: string | number) => {
    dispatch(setCompanyId(id));
    router.push(`/company-management/edit/${id}`);
  };

  const columns: ColumnDef<Company>[] = [
    {
      accessorKey: 'company_name',
      header: 'Company',
      cell: ({ row }) => (
        <div className="flex flex-col">
          <span className="font-medium">{row.original.company_name}</span>
          <span className="text-sm text-muted-foreground">
            {row.original.company_id}
          </span>
        </div>
      ),
    },
    {
      accessorKey: 'contact_email',
      header: 'Contact',
      cell: ({ row }) => (
        <div className="flex items-center gap-1">
          <Mail className="h-4 w-4 text-muted-foreground" />
          <span>{row.original.contact_email}</span>
        </div>
      ),
    },
    {
      accessorKey: 'subscription_id',
      header: 'Subscription',
      cell: ({ row }) => (
        <Badge variant="secondary" className="capitalize">
          {row.original.subscription_id.replace('SUB_', '').toLowerCase()}
        </Badge>
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
        data={Companies}
        columns={columns}
        createButtonProps={{
          href: '/company-management/add',
          text: 'Add Company',
        }}
        searchPlaceholder="Search companies..."
        renderBulkActions={({ table }) => {
          const selectedRows = table.getSelectedRowModel().rows;
          const isRowsSelected = selectedRows.length > 0;
          const deleteSelectedRows = () => {
            const selectedIds = selectedRows.map(row => row.original.id);
            // Delete Rows with selectedIds
            console.log(selectedIds);
            table.resetRowSelection();
          };

          return (
            isRowsSelected && (
              <div className="flex items-center space-x-2">
                <Button variant="destructive" onClick={deleteSelectedRows}>
                  <Trash className="mr-2 h-4 w-4" />
                  Delete {selectedRows.length} Compan
                  {selectedRows.length > 1 ? 'ies' : 'y'}
                </Button>
              </div>
            )
          );
        }}
        actions={{
          handleDelete: id => handleCompanyDelete(id),
          handleEdit: id => handleCompanyEdit(id),
        }}
      />
      <DialogModal
        title="Confirm Deletion"
        description="Are you sure you want to delete this company? This action cannot be undone."
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onConfirm={confirmDelete}
      />
    </>
  );
};

export default CompanyTable;
