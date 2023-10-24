import { TableHeaderProps } from '../../../../src/type';
import React from 'react';
import { MarsRoverPhotoTableDataProps } from '../../Utils/marsRoverPhotoMockUtils';

type TableWithBorderCellProps = {
  header: TableHeaderProps<MarsRoverPhotoTableDataProps>;
  cellValue?: MarsRoverPhotoTableDataProps;
};

const CellSorting = ({ header, cellValue }: TableWithBorderCellProps) => {
  const borderStyle = '1px solid black';
  return (
    <div
      style={{
        borderBottom: borderStyle,
        borderLeft: header.isFirstColumn ? borderStyle : 'none',
        borderRight: borderStyle,
        textAlign: 'center',
      }}
    >
      {header.id === 'col-img' ? (
        <a className='link' href={cellValue ? cellValue.value.toString() : '#'} target='_blank'>
          See photo
        </a>
      ) : (
        <p style={{ paddingLeft: '4px' }}>{cellValue?.value}</p>
      )}
    </div>
  );
};

export default CellSorting;
