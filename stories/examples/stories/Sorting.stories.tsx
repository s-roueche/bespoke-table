import Table from '../../../src/index';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TableHeaderProps, TableProps } from '../../../src/type';
import TableHeaderWithSorting from '../Components/Header/TableHeaderWithSorting/TableHeaderWithSorting';
import TableWithFullBorderCell from '../Components/Cell/TableWithFullBorderCell';
import { SortSwitch } from '../Components/Header/TableHeaderWithSorting/SortSwitch';
import {
  buildMarsRoverTableData,
  MarsRoverHeaderDataProps,
  MarsRoverTableDataProps,
} from '../Utils/marsRoversMockUtils';

const marsRoverTableHeader: TableHeaderProps<MarsRoverTableDataProps, MarsRoverHeaderDataProps>[] =
  [
    {
      id: 'col-id',
      title: 'Id',
      isFirstColumn: true,
      width: '80px',
      propertyKeyToOrder: 'value',
      defaultSortDirection: 'asc',
    },
    {
      id: 'col-name',
      title: 'Name',
      propertyKeyToOrder: 'value',
    },
    {
      id: 'col-launch-date',
      title: 'Launch date',
      propertyKeyToOrder: 'sortValue',
    },
    {
      id: 'col-landing-date',
      title: 'Landing date',
      propertyKeyToOrder: 'sortValue',
    },
    {
      id: 'col-status',
      title: 'Status',
      propertyKeyToOrder: 'value',
    },
    {
      id: 'col-last-activity-date',
      title: 'Last activity',
      propertyKeyToOrder: 'sortValue',
    },
    {
      id: 'col-photos-count',
      title: 'Photos',
      isLastColumn: true,
      propertyKeyToOrder: 'value',
    },
  ];

const meta: Meta<TableProps<MarsRoverTableDataProps, MarsRoverHeaderDataProps>> = {
  title: 'BespokeTable',
  component: Table,
  args: {
    headers: marsRoverTableHeader,
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
  render: ({ data, ...args }, { loaded: { roverResponse } }) => (
    <Table data={buildMarsRoverTableData(roverResponse.rovers)} {...args} />
  ),
};

export default meta;
type Story = StoryObj<TableProps<MarsRoverTableDataProps, MarsRoverHeaderDataProps>>;
export const Sorting: Story = {};
