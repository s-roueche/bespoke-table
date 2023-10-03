import { PaginationTableConfigProps, TableDataProps } from '../type';

export function getDataPaginated<C>(
  dataTable: TableDataProps<C>[],
  page: number,
  rowsPerPage: number,
  pagination?: PaginationTableConfigProps,
) {
  return pagination
    ? dataTable.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    : dataTable;
}
