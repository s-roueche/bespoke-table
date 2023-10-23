import Table from '../../../src/Table';
import { ffVIIDataMock } from '../Utils/tableStoriesMock';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TableHeaderProps, TableProps } from '../../../src/type';
import TableHeaderWithSorting from '../Components/Header/TableHeaderWithSorting/TableHeaderWithSorting';
import TableWithFullBorderCell from '../Components/Cell/TableWithFullBorderCell';
import { SortSwitch } from '../Components/Header/TableHeaderWithSorting/SortSwitch';

const ffVIITableHeaderWithSorting: TableHeaderProps<string>[] = [
  {
    id: 'col-name',
    title: 'Name',
    isFirstColumn: true,
    propertyKeyToOrder: 'toString',
    defaultSortDirection: 'asc',
  },
  {
    id: 'col-role',
    title: 'Role',
  },
  {
    id: 'col-weapon',
    title: 'Weapon',
    propertyKeyToOrder: 'toString',
  },
  {
    id: 'col-class',
    title: 'Class',
    isLastColumn: true,
    propertyKeyToOrder: 'toString',
  },
];

const meta: Meta<TableProps<string>> = {
  title: 'BespokeTable',
  component: Table,
  args: {
    headers: ffVIITableHeaderWithSorting,
    data: ffVIIDataMock,
    headerCellRender: (header, sortComponent) => (
      <TableHeaderWithSorting header={header} sortComponent={sortComponent} />
    ),
    cellRender: (header, rowProps, value) => (
      <TableWithFullBorderCell header={header} cellValue={value} />
    ),
    headerSortComponent: (handleSort, isSortActive, orderDirection) => (
      <SortSwitch
        onClick={handleSort}
        isColumnSortActive={isSortActive}
        orderDirection={orderDirection}
      />
    ),
  },
  render: (args) => <Table {...args} />,
};

export default meta;
type Story = StoryObj<TableProps<string>>;
export const Sorting: Story = {};
