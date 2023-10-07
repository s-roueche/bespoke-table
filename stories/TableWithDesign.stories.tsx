import Table from '../src/Table';
import {
  ffVIIDataMock,
  ffVIIDataWihDesignMock,
  ffVIITableHeader,
  ffVIITableHeaderCustomDesign,
} from './TableStoriesMock';
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { TableProps } from '../src/type';
import HeaderDesign from './Components/Header/HeaderDesign';
import CellDesign from './Components/Cell/CellDesign';

export default {
  title: 'BespokeTable/Examples',
  component: Table,
  args: {
    headers: ffVIITableHeader,
    data: ffVIIDataMock,
  },
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'gradient',
      values: [
        { name: 'gradient', value: 'linear-gradient(45deg,#4158d0,#c850c0)', default: true },
      ],
    },
  },
} as Meta;

export const CustomDesign: StoryFn<Omit<TableProps<string>, 'cellRender' | 'headerCellRender'>> = (
  props,
) => (
  <div style={{ width: '900px', color: 'gray', fontSize: '15px' }}>
    <Table<string>
      headerCellRender={(header) => <HeaderDesign header={header} />}
      cellRender={(header, rowProps, value) => (
        <CellDesign header={header} cellValue={value} rowProps={rowProps} />
      )}
      {...props}
      headers={ffVIITableHeaderCustomDesign}
      data={ffVIIDataWihDesignMock}
      headerHeight={'60px'}
    />
  </div>
);
