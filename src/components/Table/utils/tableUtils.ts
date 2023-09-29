import { TableDataProps, TableHeaderProps } from '../type';

export function generateGridTemplateColumns<C>(headers: TableHeaderProps<C>[]) {
  return headers.map((header) => (header.width ? header.width : '1fr')).join(' ');
}

export function generateGridTemplateRows<C>(data: TableDataProps<C>[]) {
  return data.map((row) => (row.rowHeight ? row.rowHeight : '1fr')).join(' ');
}
