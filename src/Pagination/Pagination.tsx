import React from 'react';
import { PaginationRender, PaginationRenderProps, UsePaginationTableProps } from '../type';

type PaginationProps = UsePaginationTableProps & {
  dataLength: number;
  paginationRender: PaginationRender;
};

export default function Pagination<C>({
  dataLength,
  currentPage,
  rowsPerPage,
  paginationConfig,
  handleChangeRowsPerPage,
  handlePageSelectChange,
  paginationRender,
}: PaginationProps) {
  const pageCount = Math.ceil(dataLength / rowsPerPage);
  const paginationRenderData: PaginationRenderProps = {
    rowsPerPage,
    paginationConfig,
    handleChangeRowsPerPage,
    handlePageSelectChange,
    currentPage: currentPage,
    dataLength,
    pageCount,
  };
  return paginationRender(paginationRenderData);
}
