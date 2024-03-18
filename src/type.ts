import { Component, FunctionComponent, ReactElement, ReactNode } from 'react';

export type Order = 'asc' | 'desc';
export type Size = `${string}${'px' | 'fr' | '%' | 'em' | 'rem' | 'vh' | 'vw'}`;

export type TableProps<C, H> = {
  headers: TableHeaderProps<C, H>[];
  headerHeight?: Size;
  headerCellRender: HeaderCellRender<C, H>;
  data: TableDataProps<C>[];
  cellRender: CellRender<C, H>;
  loadingComponent?: ReactNode;
  noDataComponent?: ReactNode;
  isLoading?: boolean;
  pagination?: PaginationTableConfigProps;
  paginationRender?: PaginationRender;
  headerSortComponent?: HeaderSortComponent;
  fallbackRender?: FallbackRender<C, H>;
};

export type TableHeaderProps<C, H> = {
  id: string;
  title?: H;
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

export type HeaderCellRender<C, H> = (
  header: TableHeaderProps<C, H>,
  sortComponent?: ReactNode,
) => ReactNode;

export type HeaderSortComponent = (
  onclick: () => void,
  isColumnSortActive: boolean,
  orderDirection: Order,
) => ReactNode;

export type RowProps = {
  rowId: string;
  firstRow: boolean;
  lastRow: boolean;
  className?: string;
  meta?: Record<string, unknown>;
};

export type CellRender<C, H> = (
  header: TableHeaderProps<C, H>,
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
  enablePagination?: boolean;
};

export type PaginationRender = (pagination: PaginationRenderProps) => ReactNode;

export type UsePaginationTableProps = {
  currentPage: number;
  handleChangeRowsPerPage: (rowsPerPage: number) => void;
  handlePageSelectChange: (page: number) => void;
} & Required<PaginationTableConfigProps>;

export type PaginationRenderProps = UsePaginationTableProps & {
  dataLength: number;
  pageCount: number;
};

export type FallbackRender<C, H> = (
  rowId: string,
  header: TableHeaderProps<C, H>,
  lastRow: boolean,
  cell?: TableCellProps<C>,
) => ReactElement<unknown, string | FunctionComponent | typeof Component> | null;
