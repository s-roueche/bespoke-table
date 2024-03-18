import { useState, useCallback } from 'react';
import { HandlerSort, Order, TableHeaderProps } from '../type';
import { getDefaultColumnSort } from '../utils/tableSortUtils';

interface UseTableSortReturn<C> {
  order: Order;
  orderByColumnId?: string;
  propertyKeyToOrder?: keyof C;
  handleSort: HandlerSort<C>;
}

export function useTableSort<C, H>(headers: TableHeaderProps<C, H>[]): UseTableSortReturn<C> {
  const defaultColumnSort = getDefaultColumnSort(headers);

  const [order, setOrder] = useState<Order>(
    defaultColumnSort && defaultColumnSort.defaultSortDirection
      ? defaultColumnSort.defaultSortDirection
      : 'asc',
  );

  const [orderByColumnId, setOrderByColumnId] = useState<string | undefined>(
    defaultColumnSort ? defaultColumnSort.id : undefined,
  );

  const [propertyKeyToOrder, setPropertyKeyToOrder] = useState<keyof C | undefined>(
    defaultColumnSort && defaultColumnSort.propertyKeyToOrder
      ? defaultColumnSort.propertyKeyToOrder
      : undefined,
  );

  const handleSort = useCallback((columnId: string, orderKey: keyof C, orderDirection: Order) => {
    setOrder(orderDirection);
    setPropertyKeyToOrder(orderKey);
    setOrderByColumnId(columnId);
  }, []);

  return {
    order,
    orderByColumnId,
    propertyKeyToOrder,
    handleSort,
  };
}
