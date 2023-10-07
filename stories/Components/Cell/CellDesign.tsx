import { RowProps, TableHeaderProps } from '../../../src/type';
import React from 'react';

type TableWithBorderCellProps = {
  header: TableHeaderProps<string>;
  cellValue?: string;
  rowProps: RowProps;
};

const CellDesign = ({ header, cellValue, rowProps }: TableWithBorderCellProps) => {
  const borderStyle = '1px solid black';
  const { lastRow, className } = rowProps;
  return (
    <div
      style={{
        borderBottom: lastRow ? borderStyle : 'none',
        borderLeft: header.isFirstColumn ? borderStyle : 'none',
        borderRight: header.isLastColumn ? borderStyle : 'none',
        paddingLeft: header.isFirstColumn ? '24px' : '8px',
        borderBottomLeftRadius: header.isFirstColumn && lastRow ? '10px' : '0px',
        borderBottomRightRadius: header.isLastColumn && lastRow ? '10px' : '0px',
        backgroundColor: className ? '#fff' : '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <p>{cellValue}</p>
    </div>
  );
};

export default CellDesign;
