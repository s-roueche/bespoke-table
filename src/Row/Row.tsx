import { ErrorBoundary } from 'react-error-boundary';
import { CellRender, FallbackRender, TableCellProps, TableHeaderProps } from '../type';
import React, { ReactNode } from 'react';

export default function Row<C>({
  rowId,
  cells,
  headers,
  cellRender,
  lastRow,
  fallbackRender,
}: {
  rowId: string;
  cells: TableCellProps<C>[];
  headers: TableHeaderProps<C>[];
  cellRender: CellRender<C>;
  lastRow: boolean;
  fallbackRender?: FallbackRender<C>;
}) {
  return (
    <>
      {headers.map((header) => {
        const key = `cell-${rowId}-${header.id}`;
        const cell = cells.find((cell) => cell.headerId === header.id);
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
            {cellRender(header, rowId, lastRow, cell?.cellData)}
          </ErrorBoundary>
        );
      })}
    </>
  );
}
