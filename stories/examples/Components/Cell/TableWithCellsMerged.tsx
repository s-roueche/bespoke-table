import { RowProps, TableHeaderProps } from '../../../../src/type';
import React from 'react';
import { MarsRoverTableDataProps } from '../../Utils/marsRoversMockUtils';

type TableWithBorderCellProps = {
  header: TableHeaderProps<MarsRoverTableDataProps>;
  cellValue?: MarsRoverTableDataProps;
  rowProps: RowProps;
};

const TableWithCellsMerged = ({ header, cellValue, rowProps }: TableWithBorderCellProps) => {
  const borderStyle = '1px solid black';
  if (!rowProps.firstRow && header.id === 'col-id') {
    return <></>;
  }

  const isRowMerged = header.id === 'col-id' && rowProps.firstRow;
  return (
    <div
      style={{
        display: 'flex',
        borderBottom: borderStyle,
        borderLeft: header.isFirstColumn ? borderStyle : 'none',
        borderRight: borderStyle,
        gridRow: isRowMerged ? '2 / end' : 'initial',
        gridColumn: isRowMerged ? '1' : 'initial',
        justifyContent: isRowMerged ? 'center' : 'initial',
        alignItems: isRowMerged ? 'center' : 'initial',
      }}
    >
      <p style={{ paddingLeft: '4px' }}>{isRowMerged ? '-' : cellValue?.value}</p>
    </div>
  );
};

export default TableWithCellsMerged;
