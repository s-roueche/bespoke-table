import { Size, TableDataProps, TableHeaderProps } from '../type';

export function generateGridTemplateColumns<C, H>(headers: TableHeaderProps<C, H>[]) {
  return headers.map((header) => (header.width ? header.width : '1fr')).join(' ');
}

export function generateGridTemplateRows<C>(data: TableDataProps<C>[], headerHeight: Size = '1fr') {
  return headerHeight + ' ' + data.map((row) => (row.rowHeight ? row.rowHeight : '1fr')).join(' ');
}
