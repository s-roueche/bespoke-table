import React from 'react';
import { TableHeaderProps } from '../../../src/type';

export type TableWithBorderHeaderProps = {
  header: TableHeaderProps<string>;
};

const TableWithBorderHeader = ({ header }: TableWithBorderHeaderProps) => {
  const borderStyle = '1px solid black';
  return (
    <div
      style={{
        borderTop: borderStyle,
        borderLeft: header.isFirstColumn ? borderStyle : 'none',
        borderRight: header.isLastColumn ? borderStyle : 'none',
      }}
    >
      <p>{header.title}</p>
    </div>
  );
};

export default TableWithBorderHeader;
