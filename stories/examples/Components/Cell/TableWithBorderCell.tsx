import { TableHeaderProps } from '../../../../src/type';
import React from 'react';
import { MarsRoverHeaderDataProps, MarsRoverTableDataProps } from '../../Utils/marsRoversMockUtils';

type TableWithBorderCellProps = {
  header: TableHeaderProps<MarsRoverTableDataProps, MarsRoverHeaderDataProps>;
  lastRow: boolean;
  cellValue?: MarsRoverTableDataProps;
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
      <p>{cellValue?.value}</p>
    </div>
  );
};

export default TableWithBorderCell;
