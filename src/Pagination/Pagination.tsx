import { PaginationRender, PaginationRenderProps, UsePaginationTableProps } from '../type';

type PaginationProps = {
  dataLength: number;
  paginationRender: PaginationRender;
  paginationConfig: UsePaginationTableProps;
};

export default function Pagination({
  dataLength,
  paginationRender,
  paginationConfig,
}: PaginationProps) {
  const { rowsPerPage, ...paginationConfigRest } = paginationConfig;
  const paginationRenderData: PaginationRenderProps = {
    rowsPerPage,
    dataLength,
    pageCount: Math.ceil(dataLength / rowsPerPage),
    ...paginationConfigRest,
  };
  return paginationRender(paginationRenderData);
}
