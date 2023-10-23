import React from 'react';
import { TableHeaderProps } from '../../../../src/type';

export type TableWithBorderHeaderProps = {
  header: TableHeaderProps<string>;
};

const TableWithFullBorderHeader = ({ header }: TableWithBorderHeaderProps) => {
  const borderStyle = '1px solid black';
  return (
    <div
      style={{
        borderTop: borderStyle,
        borderBottom: borderStyle,
        borderLeft: header.isFirstColumn ? borderStyle : 'none',
        borderRight: borderStyle,
      }}
    >
      <p style={{ textAlign: 'center', fontWeight: 700 }}>{header.title}</p>
    </div>
  );
};

export default TableWithFullBorderHeader;
