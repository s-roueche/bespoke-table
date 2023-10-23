import { RowProps, TableHeaderProps } from '../../../src/type';
import React from 'react';

type TableWithBorderCellProps = {
  header: TableHeaderProps<string>;
  cellValue?: string;
  rowProps: RowProps;
};

const TableWithCellsMerged = ({ header, cellValue, rowProps }: TableWithBorderCellProps) => {
  const borderStyle = '1px solid black';
  const { meta, rowId } = rowProps;
  if (meta?.espaceRoleColumn && header.id === 'col-role') {
    return <></>;
  }

  const isRowWeWantToMerged = header.id === 'col-role' && rowId === 'ff7-2';
  return (
    <div
      style={{
        display: 'flex',
        borderBottom: borderStyle,
        borderLeft: header.isFirstColumn ? borderStyle : 'none',
        borderRight: borderStyle,
        gridRow: isRowWeWantToMerged ? '3/ 6' : 'initial',
        gridColumn: isRowWeWantToMerged ? '2' : 'initial',
        justifyContent: isRowWeWantToMerged ? 'center' : 'initial',
        alignItems: isRowWeWantToMerged ? 'center' : 'initial',
      }}
    >
      <p style={{ paddingLeft: '4px' }}>{cellValue}</p>
    </div>
  );
};

export default TableWithCellsMerged;
