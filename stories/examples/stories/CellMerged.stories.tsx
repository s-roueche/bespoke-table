import Table from '../../../src/Table';
import { ffVIIDataMock, ffVIITableHeader } from '../Utils/tableStoriesMock';
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { TableDataProps, TableProps } from '../../../src/type';
import TableWithColumnsMergedHeader from '../Components/Header/TableWithColumnsMergedHeader';
import TableWithFullBorderCell from '../Components/Cell/TableWithFullBorderCell';
import TableWithFullBorderHeader from '../Components/Header/TableWithFullBorderHeader';
import TableWithCellsMerged from '../Components/Cell/TableWithCellsMerged';

const ffVIIWithMergedRowsDataMock: TableDataProps<string>[] = [
  {
    rowId: 'ff7-1',
    meta: {
      espaceRoleColumn: false,
    },
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
    meta: {
      espaceRoleColumn: false,
    },
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
    meta: {
      espaceRoleColumn: true,
    },
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
    meta: {
      espaceRoleColumn: true,
    },
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

export default {
  title: 'BespokeTable/Cells Merged',
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

export const TableWithColumnsMerged: StoryFn<
  Omit<TableProps<string>, 'cellRender' | 'headerCellRender'>
> = (props) => (
  <Table<string>
    headerCellRender={(header) => <TableWithColumnsMergedHeader header={header} />}
    cellRender={(header, rowProps, value) => (
      <TableWithFullBorderCell header={header} cellValue={value} />
    )}
    {...props}
  />
);

export const TableWithRowsMerged: StoryFn<
  Omit<TableProps<string>, 'cellRender' | 'headerCellRender'>
> = (props) => (
  <Table<string>
    headerCellRender={(header) => <TableWithFullBorderHeader header={header} />}
    cellRender={(header, rowProps, value) => (
      <TableWithCellsMerged header={header} cellValue={value} rowProps={rowProps} />
    )}
    {...props}
    data={ffVIIWithMergedRowsDataMock}
  />
);
