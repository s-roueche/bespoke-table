import { Component, FunctionComponent, ReactElement, ReactNode } from 'react';

export type Order = 'asc' | 'desc';
export type Size = `${string}${'px' | 'fr'}`;

export type TableProps<C> = {
  headers: TableHeaderProps<C>[];
  headerHeight?: Size;
  headerCellRender: HeaderCellRender<C>;
  headerSortComponent?: HeaderSortComponent;
  data: TableDataProps<C>[];
  cellRender: CellRender<C>;
  loadingComponent?: ReactNode;
  noDataComponent?: ReactNode;
  isLoading?: boolean;
  pagination?: PaginationTableConfigProps;
  fallbackRender?: FallbackRender<C>;
};

export type TableHeaderProps<C> = {
  id: string;
  title?: string;
  propertyKeyToOrder?: keyof C;
  defaultSortDirection?: Order;
  width?: Size;
  isLastColumn?: boolean;
  isFirstColumn?: boolean;
};

export type TableDataProps<C> = {
  rowId: string;
  rowHeight?: Size;
  className?: string;
  meta?: Record<string, unknown>;
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

export type RowProps = {
  rowId: string;
  lastRow: boolean;
  className?: string;
  meta?: Record<string, unknown>;
};

export type CellRender<C> = (
  header: TableHeaderProps<C>,
  rowProps: RowProps,
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

export type FallbackRender<C> = (
  rowId: string,
  header: TableHeaderProps<C>,
  lastRow: boolean,
  cell?: TableCellProps<C>,
) => ReactElement<unknown, string | FunctionComponent | typeof Component> | null;
