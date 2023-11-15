import { TableDataProps, UsePaginationTableProps } from '../type';

export function getDataPaginated<C>(
  dataTable: TableDataProps<C>[],
  pagination: Pick<UsePaginationTableProps, 'currentPage' | 'rowsPerPage' | 'enablePagination'>,
) {
  const pageIndex = pagination.currentPage - 1;
  const rowsPerPage = pagination.rowsPerPage;
  return pagination.enablePagination
    ? dataTable.slice(pageIndex * rowsPerPage, pageIndex * rowsPerPage + rowsPerPage)
    : dataTable;
}
