import React from 'react';
import { Button } from '@/components/ui/button';
import { Table } from '@tanstack/react-table';

interface PaginationProps<T> {
  table: Table<T>;
}

export const TablePagination = <T,>({ table }: PaginationProps<T>) => {
  const { pageIndex, pageSize } = table.getState().pagination;
  const totalRows = table.getFilteredRowModel().rows.length;
  const pageCount = table.getPageCount();

  const startRow = pageIndex * pageSize + 1;
  const endRow = Math.min((pageIndex + 1) * pageSize, totalRows);

  const handlePageChange = (page: number) => table.setPageIndex(page);

  return (
    <div className="mt-4 flex items-center justify-between">
      <div className="text-sm text-muted-foreground">
        Showing {startRow} to {endRow} of {totalRows} entries
      </div>
      <div className="flex items-center space-x-2">
        <PaginationButton
          onClick={() => handlePageChange(pageIndex - 1)}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </PaginationButton>

        {Array.from({ length: pageCount }, (_, i) => i + 1).map(page => (
          <PaginationButton
            key={page}
            isActive={pageIndex + 1 === page}
            onClick={() => handlePageChange(page - 1)}
          >
            {page}
          </PaginationButton>
        ))}

        <PaginationButton
          onClick={() => handlePageChange(pageIndex + 1)}
          disabled={!table.getCanNextPage()}
        >
          Next
        </PaginationButton>
      </div>
    </div>
  );
};

interface PaginationButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  isActive?: boolean;
}

const PaginationButton = ({
  children,
  onClick,
  disabled = false,
  isActive = false,
}: PaginationButtonProps) => {
  return (
    <Button
      variant={isActive ? 'default' : 'outline'}
      size="sm"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};
