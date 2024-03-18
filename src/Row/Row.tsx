import { ErrorBoundary } from 'react-error-boundary';
import { CellRender, FallbackRender, RowProps, TableDataProps, TableHeaderProps } from '../type';
import React from 'react';

export default function Row<C, H>({
  row,
  headers,
  cellRender,
  firstRow,
  lastRow,
  fallbackRender,
}: {
  row: TableDataProps<C>;
  headers: TableHeaderProps<C, H>[];
  cellRender: CellRender<C, H>;
  firstRow: boolean;
  lastRow: boolean;
  fallbackRender?: FallbackRender<C, H>;
}) {
  const { rowId, cells, className, meta } = row;
  return (
    <>
      {headers.map((header) => {
        const key = `cell-${rowId}-${header.id}`;
        const cell = cells.find((cell) => cell.headerId === header.id);
        const rowProps: RowProps = {
          rowId,
          firstRow,
          lastRow,
          className,
          meta,
        };
        return (
          <ErrorBoundary
            key={key}
            fallback={
              fallbackRender ? (
                fallbackRender(rowId, header, lastRow, cell)
              ) : (
                <span>Rendering error</span>
              )
            }
          >
            {cellRender(header, rowProps, cell?.cellData)}
          </ErrorBoundary>
        );
      })}
    </>
  );
}
