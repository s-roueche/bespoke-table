import React from 'react';
import { TableHeaderProps } from '../../../../src/type';
import { MarsRoverTableDataProps } from '../../Utils/marsRoversMockUtils';

export type TableWithBorderHeaderProps = {
  header: TableHeaderProps<MarsRoverTableDataProps>;
};

const TableWithColumnsMergedHeader = ({ header }: TableWithBorderHeaderProps) => {
  if (header.id === 'col-name') {
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
        gridColumn: header.id === 'col-id' ? '1/ span 2' : 'initial',
      }}
    >
      <p style={{ textAlign: 'center', fontWeight: 700 }}>{header.title}</p>
    </div>
  );
};

export default TableWithColumnsMergedHeader;
