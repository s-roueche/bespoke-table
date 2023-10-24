import React from 'react';
import { TableHeaderProps } from '../../../../src/type';
import { MarsRoverTableDataProps } from '../../Utils/marsRoversMockUtils';

const CellErrorLayout = ({
  lastRow,
  header,
  cellValue,
}: {
  lastRow: boolean;
  header: TableHeaderProps<MarsRoverTableDataProps>;
  cellValue?: string;
}) => {
  const borderStyle = '1px solid black';
  return (
    <div
      style={{
        borderBottom: lastRow ? borderStyle : 'none',
        borderLeft: header.isFirstColumn ? borderStyle : 'none',
        borderRight: borderStyle,
        padding: '4px',
      }}
    >
      <p style={{ color: 'red', textAlign: 'center' }}>{cellValue}</p>
    </div>
  );
};

export default CellErrorLayout;
