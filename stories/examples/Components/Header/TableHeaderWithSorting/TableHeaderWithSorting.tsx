import React from 'react';
import {
  MarsRoverHeaderDataProps,
  MarsRoverTableDataProps,
} from '../../../Utils/marsRoversMockUtils';
import { TableHeaderProps } from '../../../../../src';

export type TableHeaderWithSortingProps = {
  header: TableHeaderProps<MarsRoverTableDataProps, MarsRoverHeaderDataProps>;
  sortComponent?: React.ReactNode;
};

const TableHeaderWithSorting = ({ header, sortComponent }: TableHeaderWithSortingProps) => {
  const borderStyle = '1px solid black';
  return (
    <div
      style={{
        borderTop: borderStyle,
        borderBottom: borderStyle,
        borderLeft: header.isFirstColumn ? borderStyle : 'none',
        borderRight: borderStyle,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '0 10px',
        alignItems: 'center',
      }}
    >
      <p style={{ textAlign: 'center', fontWeight: 700 }}>{header.title}</p>
      {sortComponent}
    </div>
  );
};

export default TableHeaderWithSorting;
