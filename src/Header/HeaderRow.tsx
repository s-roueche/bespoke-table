import React from 'react';
import { Fragment } from 'react';
import {
  HandlerSort,
  HeaderCellRender,
  HeaderSortComponent,
  Order,
  TableHeaderProps,
} from '../type';
import { getNextOrderDirection } from '../utils/tableSortUtils';

export default function HeaderRow<C, H>({
  headers,
  headerCellRender,
  handleSort,
  activeColumnIdSorted,
  orderDirection,
  headerSortComponent,
}: {
  headers: TableHeaderProps<C, H>[];
  headerCellRender: HeaderCellRender<C, H>;
  handleSort: HandlerSort<C>;
  activeColumnIdSorted?: string;
  orderDirection: Order;
  headerSortComponent?: HeaderSortComponent;
}) {
  return (
    <>
      {headers.map((header) => {
        const propertyKeyToOrder = header.propertyKeyToOrder;
        const isSortActive = propertyKeyToOrder && headerSortComponent;
        const sortComponent =
          isSortActive &&
          headerSortComponent(
            () =>
              handleSort(
                header.id,
                propertyKeyToOrder,
                getNextOrderDirection(header.id, orderDirection, activeColumnIdSorted),
              ),
            activeColumnIdSorted === header.id,
            orderDirection,
          );

        return <Fragment key={header.id}>{headerCellRender(header, sortComponent)}</Fragment>;
      })}
    </>
  );
}
