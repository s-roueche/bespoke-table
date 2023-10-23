import Table from '../../../src/Table';
import { ffVIIDataMock } from '../Utils/tableStoriesMock';
import { Meta, StoryFn } from '@storybook/react';
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

export default {
  title: 'BespokeTable',
  component: Table,
  args: {
    headers: ffVIITableHeaderWithSorting,
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

export const Sorting: StoryFn<Omit<TableProps<string>, 'cellRender' | 'headerCellRender'>> = (
  props,
) => (
  <Table<string>
    headerCellRender={(header, sortComponent) => (
      <TableHeaderWithSorting header={header} sortComponent={sortComponent} />
    )}
    cellRender={(header, rowProps, value) => (
      <TableWithFullBorderCell header={header} cellValue={value} />
    )}
    headerSortComponent={(handleSort, isSortActive, orderDirection) => (
      <SortSwitch
        onClick={handleSort}
        isColumnSortActive={isSortActive}
        orderDirection={orderDirection}
      />
    )}
    {...props}
  />
);
