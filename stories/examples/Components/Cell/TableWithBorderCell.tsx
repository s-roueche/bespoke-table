import { TableHeaderProps } from '../../../../src/type';
import React from 'react';
import { MarsRoverTableDataProps } from '../../Utils/marsRoversMockUtils';

type TableWithBorderCellProps = {
  header: TableHeaderProps<MarsRoverTableDataProps>;
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
