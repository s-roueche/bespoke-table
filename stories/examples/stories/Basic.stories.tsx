import Table from '../../../src/Table';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TableProps } from '../../../src/type';
import {
  buildMarsRoverTableData,
  MarsRoverTableDataProps,
  marsRoverTableHeader,
} from '../Utils/marsRoversMockUtils';

const meta: Meta<TableProps<MarsRoverTableDataProps>> = {
  title: 'BespokeTable',
  component: Table,
  args: {
    headers: marsRoverTableHeader,
    headerCellRender: (header) => <span>{header.title}</span>,
    cellRender: (header, rowProps, cell) => <span>{cell?.value}</span>,
  },
  render: ({ data, ...args }, { loaded: { roverResponse } }) => (
    <Table data={buildMarsRoverTableData(roverResponse.rovers)} {...args} />
  ),
};

export default meta;
type Story = StoryObj<TableProps<MarsRoverTableDataProps>>;
export const DefaultTable: Story = {};
