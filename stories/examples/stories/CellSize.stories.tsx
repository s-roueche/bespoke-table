import Table from '../../../src/index';
import { Meta, StoryObj } from '@storybook/react';
import { TableHeaderProps, TableProps } from '../../../src/type';
import TableWithFullBorderHeader from '../Components/Header/TableWithFullBorderHeader';
import TableWithFullBorderCell from '../Components/Cell/TableWithFullBorderCell';
import React from 'react';
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
      width: '50px',
    },
    {
      id: 'col-name',
      title: 'Name',
      width: '2fr', // Change this value to see the difference
    },
    {
      id: 'col-launch-date',
      title: 'Launch date',
    },
    {
      id: 'col-landing-date',
      title: 'Landing date',
    },
    {
      id: 'col-status',
      title: 'Status',
    },
    {
      id: 'col-last-activity-date',
      title: 'Last activity',
    },
    {
      id: 'col-photos-count',
      title: 'Photos',
      isLastColumn: true,
    },
  ];

const meta: Meta<TableProps<MarsRoverTableDataProps, MarsRoverHeaderDataProps>> = {
  title: 'BespokeTable/Cell size',
  component: Table,
  args: {
    headerCellRender: (header) => <TableWithFullBorderHeader header={header} />,
    cellRender: (header, rowProps, value) => (
      <TableWithFullBorderCell header={header} cellValue={value} />
    ),
  },
};

export default meta;
type Story = StoryObj<TableProps<MarsRoverTableDataProps, MarsRoverHeaderDataProps>>;
export const ColumnCustomWidth: Story = {
  args: { headers: marsRoverTableHeader },
  render: ({ data, ...args }, { loaded: { roverResponse } }) => (
    <Table data={buildMarsRoverTableData(roverResponse.rovers)} {...args} />
  ),
};
export const ColumnCustomHeight: Story = {
  args: { headers: marsRoverTableHeader },
  render: ({ data, ...args }, { loaded: { roverResponse } }) => (
    <Table data={buildMarsRoverTableData(roverResponse.rovers, '30px')} {...args} />
  ),
};
