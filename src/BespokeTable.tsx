import { useTableSort } from './hooks/useOrderTable';
import { usePaginationTable } from './hooks/usePaginationTable';
import { getDataSorted } from './utils/tableSortUtils';
import { getDataPaginated } from './utils/tablePaginationUtils';
import { generateGridTemplateColumns, generateGridTemplateRows } from './utils/tableUtils';
import HeaderRow from './Header/HeaderRow';
import Row from './Row/Row';
import Pagination from './Pagination/Pagination';
import React from 'react';
import { TableProps } from './index';

export default function BespokeTable<C, H>({
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
  containerClassName,
}: TableProps<C, H>) {
  const { order, orderByColumnId, propertyKeyToOrder, handleSort } = useTableSort<C, H>(headers);
  const paginationConfig = usePaginationTable(pagination);
  const isDataAvailable = isLoading === false && data.length !== 0;
  const dataSorted = getDataSorted(orderByColumnId, propertyKeyToOrder, data, order);
  const dataTable = getDataPaginated(dataSorted, paginationConfig);

  return (
    <div className={containerClassName}>
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
