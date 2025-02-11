import { ColumnDef, Table } from '@tanstack/react-table';

export type Actions = {
  handleDelete: (id: string | number) => void;
  handleEdit: (id: string | number) => void;
};

export interface DetailedListTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  actions: Actions;
  createButtonProps?: {
    href: string;
    text: string;
  };
  searchPlaceholder?: string;
  initialPageSize?: number;
  renderBulkActions?: ({ table }: { table: Table<T> }) => React.ReactNode;
}
