import { ColumnDef } from '@tanstack/react-table';

export interface BaseDataType {
  id: string;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface BaseListTableProps<T extends BaseDataType> {
  data: T[];
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  columns: ColumnDef<T, any>[];
  searchPlaceholder?: string;
  initialPageSize?: number;
}
