import React from 'react';
import { TableHeaderProps } from '../../../src/type';

export type TableWithBorderHeaderProps = {
  header: TableHeaderProps<string>;
};

const TableWithColumnsMergedHeader = ({ header }: TableWithBorderHeaderProps) => {
  if (header.id === 'col-role') {
    return <></>;
  }
  const borderStyle = '1px solid black';
  return (
    <div
      style={{
        borderTop: borderStyle,
        borderBottom: borderStyle,
        borderLeft: header.isFirstColumn ? borderStyle : 'none',
        borderRight: borderStyle,
        gridColumn: header.id === 'col-name' ? '1/ span 2' : 'initial',
      }}
    >
      <p style={{ textAlign: 'center', fontWeight: 700 }}>{header.title}</p>
    </div>
  );
};

export default TableWithColumnsMergedHeader;
