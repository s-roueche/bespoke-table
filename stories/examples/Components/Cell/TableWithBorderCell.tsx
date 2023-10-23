import { TableHeaderProps } from '../../../../src/type';
import React from 'react';

type TableWithBorderCellProps = {
  header: TableHeaderProps<string>;
  lastRow: boolean;
  cellValue?: string;
};

const TableWithBorderCell = ({ header, lastRow, cellValue }: TableWithBorderCellProps) => {
  const borderStyle = '1px solid black';
  return (
    <div
      style={{
        borderBottom: lastRow ? borderStyle : 'none',
        borderLeft: header.isFirstColumn ? borderStyle : 'none',
        borderRight: header.isLastColumn ? borderStyle : 'none',
      }}
    >
      <p>{cellValue}</p>
    </div>
  );
};

export default TableWithBorderCell;
