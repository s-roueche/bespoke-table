import React from 'react';
import HeaderRow from './Header/HeaderRow';
import Row from './Row/Row';
import { useTableSort } from './hooks/useOrderTable';
import { usePaginationTable } from './hooks/usePaginationTable';
import { TableProps } from './type';
import { getDataPaginated } from './utils/tablePaginationUtils';
import { getDataSorted } from './utils/tableSortUtils';
import { generateGridTemplateColumns, generateGridTemplateRows } from './utils/tableUtils';
import Pagination from './Pagination/Pagination';

export default function Table<C>({
  data,
  headers,
  cellRender,
  headerCellRender,
  isLoading = false,
  pagination,
  paginationRender,
  loadingComponent,
  noDataComponent,
  headerSortComponent,
  fallbackRender,
  headerHeight,
}: TableProps<C>) {
  const { order, orderByColumnId, propertyKeyToOrder, handleSort } = useTableSort<C>(headers);
  const paginationConfig = usePaginationTable(pagination);
  const isDataAvailable = isLoading === false && data.length !== 0;
  const dataSorted = getDataSorted(orderByColumnId, propertyKeyToOrder, data, order);
  const dataTable = getDataPaginated(dataSorted, paginationConfig);

  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: generateGridTemplateColumns(headers),
          gridTemplateRows: isDataAvailable
            ? generateGridTemplateRows(dataTable, headerHeight)
            : 'none',
        }}
      >
        <HeaderRow
          headers={headers}
          headerCellRender={headerCellRender}
          handleSort={handleSort}
          activeColumnIdSorted={orderByColumnId}
          orderDirection={order}
          headerSortComponent={headerSortComponent}
        />
        {isLoading === false && data.length === 0 && (
          <div style={{ gridColumn: '1/end' }}>{noDataComponent}</div>
        )}
        {isDataAvailable &&
          dataTable.map((row, index) => (
            <Row
              key={`row-${row.rowId}`}
              row={row}
              headers={headers}
              cellRender={cellRender}
              firstRow={index === 0}
              lastRow={index === dataTable.length - 1}
              fallbackRender={fallbackRender}
            />
          ))}
        {isLoading && <div style={{ gridColumn: '1/end' }}>{loadingComponent}</div>}
      </div>
      {isDataAvailable && paginationRender && (
        <Pagination
          dataLength={data.length}
          paginationRender={paginationRender}
          paginationConfig={paginationConfig}
        />
      )}
    </div>
  );
}
