import Table from '../../../src/Table';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TableDataProps, TableHeaderProps, TableProps } from '../../../src/type';
import HeaderDesign from '../Components/Header/HeaderDesign';
import CellDesign from '../Components/Cell/CellDesign';

const ffVIIDataWihDesignMock: TableDataProps<string>[] = [
  {
    rowId: 'ff7-1',
    rowHeight: '50px',
    className: 'odd',
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
    rowHeight: '50px',
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
    rowHeight: '50px',
    className: 'odd',
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
    rowHeight: '50px',
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

const ffVIITableHeaderCustomDesign: TableHeaderProps<string>[] = [
  {
    id: 'col-name',
    title: 'Name',
    isFirstColumn: true,
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

const meta: Meta<TableProps<string>> = {
  title: 'BespokeTable',
  component: Table,
  args: {
    headers: ffVIITableHeaderCustomDesign,
    data: ffVIIDataWihDesignMock,
    headerCellRender: (header) => <HeaderDesign header={header} />,
    cellRender: (header, rowProps, value) => (
      <CellDesign header={header} cellValue={value} rowProps={rowProps} />
    ),
    headerHeight: '60px',
  },
  render: (args) => <Table {...args} />,
  parameters: {
    backgrounds: {
      default: 'gradient',
      values: [
        { name: 'gradient', value: 'linear-gradient(45deg,#4158d0,#c850c0)', default: true },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '900px', color: 'gray', fontSize: '15px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<TableProps<string>>;
export const FullyDesigned: Story = {};
