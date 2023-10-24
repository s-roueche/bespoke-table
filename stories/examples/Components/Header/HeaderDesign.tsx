import React from 'react';
import { TableHeaderProps } from '../../../../src/type';
import { MarsRoverTableDataProps } from '../../Utils/marsRoversMockUtils';

export type TableWithBorderHeaderProps = {
  header: TableHeaderProps<MarsRoverTableDataProps>;
};

const HeaderDesign = ({ header }: TableWithBorderHeaderProps) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#36304a',
        paddingLeft: header.isFirstColumn ? '24px' : '8px',
        borderTopLeftRadius: header.isFirstColumn ? '10px' : '0px',
        borderTopRightRadius: header.isLastColumn ? '10px' : '0px',
      }}
    >
      <p
        style={{
          fontWeight: 700,
          color: '#FFF',
          fontSize: '18px',
        }}
      >
        {header.title}
      </p>
    </div>
  );
};

export default HeaderDesign;
