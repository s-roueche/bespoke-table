import { useState } from 'react';
import { PaginationTableConfigProps } from '../type';

export type UsePaginationTableProps = {
  page: number;
  rowsPerPage: number;
  handleChangeRowsPerPage: (rowsPerPage: number) => void;
  handlePageSelectChange: (page: number) => void;
  paginationConfig: Omit<PaginationTableConfigProps, 'rowsPerPage'>;
};

export function usePaginationTable(
  pagination?: PaginationTableConfigProps,
): UsePaginationTableProps {
  const paginationConfig = { initialPage: 0, rowsPerPage: 10, ...pagination };
  const [page, setPage] = useState(paginationConfig.initialPage);
  const [rowsPerPage, setRowsPerPage] = useState(paginationConfig.rowsPerPage);
  const handleChangeRowsPerPage = (rowsPerPage: number) => {
    setRowsPerPage(rowsPerPage);
    setPage(0);
  };

  const handlePageSelectChange = (page: number) => {
    setPage(page);
  };

  return {
    page,
    rowsPerPage,
    handleChangeRowsPerPage,
    handlePageSelectChange,
    paginationConfig,
  };
}
