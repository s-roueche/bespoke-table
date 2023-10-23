import { PaginationTableConfigProps, TableDataProps } from '../type';

export function getDataPaginated<C>(
  dataTable: TableDataProps<C>[],
  page: number,
  rowsPerPage: number,
  pagination?: PaginationTableConfigProps,
) {
  const pageIndex = page - 1;
  return pagination?.enablePagination
    ? dataTable.slice(pageIndex * rowsPerPage, pageIndex * rowsPerPage + rowsPerPage)
    : dataTable;
}
