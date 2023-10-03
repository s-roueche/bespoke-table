import { ReactNode } from 'react';

export type Order = 'asc' | 'desc';

export type TableProps<C> = {
  data: TableDataProps<C>[];
  headers: TableHeaderProps<C>[];
  headerCellRender: HeaderCellRender<C>;
  headerSortComponent?: HeaderSortComponent;
  cellRender: CellRender<C>;
  loadingComponent?: ReactNode;
  noDataComponent?: ReactNode;
  isLoading?: boolean;
  pagination?: PaginationTableConfigProps;
};

export type TableHeaderProps<C> = {
  id: string;
  title?: string;
  propertyKeyToOrder?: keyof C;
  defaultSortDirection?: Order;
  width?: `${string}${'px' | 'fr'}`;
  isLastColumn?: boolean;
  isFirstColumn?: boolean;
};

export type TableDataProps<C> = {
  rowId: string;
  rowHeight?: `${string}${'px' | 'fr'}`;
  cells: TableCellProps<C>[];
};

export type TableCellProps<C> = {
  headerId: string;
  cellData?: C;
};

export type HeaderCellRender<C> = (
  header: TableHeaderProps<C>,
  sortComponent?: ReactNode,
) => ReactNode;

export type HeaderSortComponent = (
  onclick: () => void,
  isColumnSortActive: boolean,
  orderDirection: Order,
) => ReactNode;

export type CellRender<C> = (
  header: TableHeaderProps<C>,
  rowId: string,
  lastRow: boolean,
  value?: C,
) => ReactNode;

export type HandlerSort<C> = (
  columnId: string,
  propertyKeyToOrder: keyof C,
  orderDirection: Order,
) => void;

export type PaginationTableConfigProps = {
  initialPage?: number;
  rowsPerPage?: number;
  itemsPerPage?: number[];
};
