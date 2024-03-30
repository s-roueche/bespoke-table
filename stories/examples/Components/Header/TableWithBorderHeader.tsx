import React from 'react';
import { MarsRoverHeaderDataProps, MarsRoverTableDataProps } from '../../Utils/marsRoversMockUtils';
import { TableHeaderProps } from '../../../../src';

export type TableWithBorderHeaderProps = {
  header: TableHeaderProps<MarsRoverTableDataProps, MarsRoverHeaderDataProps>;
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
