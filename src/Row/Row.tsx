import { ErrorBoundary } from 'react-error-boundary';
import { CellRender, FallbackRender, RowProps, TableDataProps, TableHeaderProps } from '../type';
import React from 'react';

export default function Row<C>({
  row,
  headers,
  cellRender,
  lastRow,
  fallbackRender,
}: {
  row: TableDataProps<C>;
  headers: TableHeaderProps<C>[];
  cellRender: CellRender<C>;
  lastRow: boolean;
  fallbackRender?: FallbackRender<C>;
}) {
  const { rowId, cells, className, meta } = row;
  return (
    <>
      {headers.map((header) => {
        const key = `cell-${rowId}-${header.id}`;
        const cell = cells.find((cell) => cell.headerId === header.id);
        const rowProps: RowProps = {
          rowId,
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
