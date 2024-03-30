import { isFunction } from 'lodash';
import { Order, TableDataProps, TableHeaderProps } from '../index';

export function getNextOrderDirection(
  nextColumnIdToSort: string,
  currentOrderDirection: Order,
  columnIdSorted?: string,
): Order {
  if (columnIdSorted === nextColumnIdToSort) {
    return currentOrderDirection === 'desc' ? 'asc' : 'desc';
  }
  return 'asc';
}

export function getDefaultColumnSort<C, H>(headers: TableHeaderProps<C, H>[]) {
  return headers.find((header) => header.defaultSortDirection !== undefined);
}

export function getDataSorted<C>(
  orderByColumnId: string | undefined,
  propertyKeyToOrder: keyof C | undefined,
  data: TableDataProps<C>[],
  order: Order,
) {
  return orderByColumnId && propertyKeyToOrder
    ? sortTableData(data, orderByColumnId, propertyKeyToOrder, order)
    : data;
}

function sortTableData<C>(
  data: TableDataProps<C>[],
  orderByColumnId: string,
  propertyKeyToOrder: keyof C,
  order: Order,
) {
  if (data && data.length > 0) {
    const sortRows = (a: TableDataProps<C>, b: TableDataProps<C>) => {
      const aValue = getCellValue(a, propertyKeyToOrder, orderByColumnId);
      const bValue = getCellValue(b, propertyKeyToOrder, orderByColumnId);

      return order === 'desc'
        ? descendingComparator(aValue, bValue)
        : -descendingComparator(aValue, bValue);
    };

    data.sort(sortRows);
  }
  return data;
}

function getCellValue<C>(rows: TableDataProps<C>, propertyKey: keyof C, columnId: string): any {
  const cell = rows.cells.find((cell) => cell.headerId === columnId);
  if (cell && cell.cellData && cell.cellData[propertyKey]) {
    if (isFunction(cell.cellData[propertyKey])) {
      return (cell.cellData[propertyKey] as any)();
    }
    return cell.cellData[propertyKey];
  }
  return 0;
}

function descendingComparator(a: any, b: any) {
  if (b < a) {
    return -1;
  }
  if (b > a) {
    return 1;
  }
  return 0;
}
