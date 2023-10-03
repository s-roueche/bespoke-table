import { TableHeaderProps } from '../../../src/type';
import React from 'react';

type TableWithBorderCellProps = {
  header: TableHeaderProps<string>;
  cellValue?: string;
};

const TableWithFullBorderCell = ({ header, cellValue }: TableWithBorderCellProps) => {
  const borderStyle = '1px solid black';
  return (
    <div
      style={{
        borderBottom: borderStyle,
        borderLeft: header.isFirstColumn ? borderStyle : 'none',
        borderRight: borderStyle,
      }}
    >
      <p style={{ paddingLeft: '4px' }}>{cellValue}</p>
    </div>
  );
};

export default TableWithFullBorderCell;
