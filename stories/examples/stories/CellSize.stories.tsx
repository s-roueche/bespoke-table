import Table from '../../../src/Table';
import { ffVIIDataMock, ffVIITableHeader } from '../Utils/tableStoriesMock';
import { Meta, StoryFn } from '@storybook/react';
import { TableDataProps, TableHeaderProps, TableProps } from '../../../src/type';
import TableWithFullBorderHeader from '../Components/Header/TableWithFullBorderHeader';
import TableWithFullBorderCell from '../Components/Cell/TableWithFullBorderCell';
import React from 'react';

const ffVIIDataCustomHeightMock: TableDataProps<string>[] = [
  {
    rowId: 'ff7-1',
    cells: [
      {
        headerId: 'col-name',
        cellData: 'Cloud Strife',
      },
      {
        headerId: 'col-role',
        cellData: 'Main Protagonist',
      },
      {
        headerId: 'col-weapon',
        cellData: 'Buster Sword',
      },
      {
        headerId: 'col-class',
        cellData: 'Soldier',
      },
    ],
  },
  {
    rowId: 'ff7-2',
    rowHeight: '4fr',
    cells: [
      {
        headerId: 'col-name',
        cellData: 'Aerith Gainsborough',
      },
      {
        headerId: 'col-role',
        cellData: 'Protagonist',
      },
      {
        headerId: 'col-weapon',
        cellData: 'Guard Stick',
      },
      {
        headerId: 'col-class',
        cellData: 'Healer',
      },
    ],
  },
  {
    rowId: 'ff7-3',
    cells: [
      {
        headerId: 'col-name',
        cellData: 'Tifa Lockhart',
      },
      {
        headerId: 'col-role',
        cellData: 'Protagonist',
      },
      {
        headerId: 'col-weapon',
        cellData: 'Fists',
      },
      {
        headerId: 'col-class',
        cellData: 'Fighter',
      },
    ],
  },
  {
    rowId: 'ff7-4',
    cells: [
      {
        headerId: 'col-name',
        cellData: 'Barret Wallace',
      },
      {
        headerId: 'col-role',
        cellData: 'Protagonist',
      },
      {
        headerId: 'col-weapon',
        cellData: 'Gun-Arm',
      },
      {
        headerId: 'col-class',
        cellData: 'Resistant',
      },
    ],
  },
];

const ffVIITableHeaderCustomWidth: TableHeaderProps<string>[] = [
  {
    id: 'col-name',
    title: 'Name',
    isFirstColumn: true,
    width: '2fr',
  },
  {
    id: 'col-role',
    title: 'Role',
  },
  {
    id: 'col-weapon',
    title: 'Weapon',
  },
  {
    id: 'col-class',
    title: 'Class',
    isLastColumn: true,
  },
];

export default {
  title: 'BespokeTable/Cell size',
  component: Table,
  args: {
    headers: ffVIITableHeader,
    data: ffVIIDataMock,
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '900px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

export const ColumnCustomWidth: StoryFn<
  Omit<TableProps<string>, 'cellRender' | 'headerCellRender'>
> = (props) => (
  <Table<string>
    {...props}
    headers={ffVIITableHeaderCustomWidth}
    headerCellRender={(header) => <TableWithFullBorderHeader header={header} />}
    cellRender={(header, rowProps, value) => (
      <TableWithFullBorderCell header={header} cellValue={value} />
    )}
  />
);

export const ColumnCustomHeight: StoryFn<
  Omit<TableProps<string>, 'cellRender' | 'headerCellRender'>
> = (props) => (
  <Table<string>
    {...props}
    data={ffVIIDataCustomHeightMock}
    headerCellRender={(header) => <TableWithFullBorderHeader header={header} />}
    cellRender={(header, rowProps, value) => (
      <TableWithFullBorderCell header={header} cellValue={value} />
    )}
  />
);
