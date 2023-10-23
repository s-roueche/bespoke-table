import { useState } from 'react';
import { PaginationTableConfigProps, UsePaginationTableProps } from '../type';

export function usePaginationTable(
  pagination?: PaginationTableConfigProps,
): UsePaginationTableProps {
  const paginationConfig = {
    initialPage: 1,
    rowsPerPage: 10,
    itemsPerPage: [5, 10, 25, 50],
    enablePagination: false,
    ...pagination,
  };
  const [page, setPage] = useState(paginationConfig.initialPage);
  const [rowsPerPage, setRowsPerPage] = useState(paginationConfig.rowsPerPage);

  const handleChangeRowsPerPage = (rowsPerPage: number) => {
    setRowsPerPage(rowsPerPage);
    setPage(1);
  };

  const handlePageSelectChange = (page: number) => {
    setPage(page);
  };

  return {
    currentPage: page,
    rowsPerPage,
    handleChangeRowsPerPage,
    handlePageSelectChange,
    paginationConfig,
  };
}
