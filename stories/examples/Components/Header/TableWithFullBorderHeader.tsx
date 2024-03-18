import React from 'react';
import { TableHeaderProps } from '../../../../src/type';
import { MarsRoverHeaderDataProps, MarsRoverTableDataProps } from '../../Utils/marsRoversMockUtils';
import { MarsRoverPhotoTableDataProps } from '../../Utils/marsRoverPhotoMockUtils';

export type TableWithBorderHeaderProps = {
  header:
    | TableHeaderProps<MarsRoverTableDataProps, MarsRoverHeaderDataProps>
    | TableHeaderProps<MarsRoverPhotoTableDataProps, MarsRoverHeaderDataProps>;
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
