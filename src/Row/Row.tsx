import { ErrorBoundary } from 'react-error-boundary';
import { CellRender, TableCellProps, TableHeaderProps } from '../type';
import React from 'react';

export default function Row<C>({
  rowId,
  cells,
  headers,
  cellRender,
  lastRow,
}: {
  rowId: string;
  cells: TableCellProps<C>[];
  headers: TableHeaderProps<C>[];
  cellRender: CellRender<C>;
  lastRow: boolean;
}) {
  return (
    <>
      {headers.map((header) => {
        const key = `cell-${rowId}-${header.id}`;
        const cell = cells.find((cell) => cell.headerId === header.id);
        return (
          <ErrorBoundary key={key} fallback={<span>Rendering error</span>}>
            {cellRender(header, rowId, lastRow, cell?.cellData)}
          </ErrorBoundary>
        );
      })}
    </>
  );
}
