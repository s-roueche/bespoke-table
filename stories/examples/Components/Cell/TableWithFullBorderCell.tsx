import { TableHeaderProps } from '../../../../src/type';
import React from 'react';
import { MarsRoverHeaderDataProps, MarsRoverTableDataProps } from '../../Utils/marsRoversMockUtils';

type TableWithBorderCellProps = {
  header: TableHeaderProps<MarsRoverTableDataProps, MarsRoverHeaderDataProps>;
  cellValue?: MarsRoverTableDataProps;
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
      <p style={{ paddingLeft: '4px' }}>{cellValue?.value}</p>
    </div>
  );
};

export default TableWithFullBorderCell;
