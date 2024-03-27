import Table from '../../../src/index';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TableProps } from '../../../src/type';
import {
  buildMarsRoverTableData,
  MarsRoverHeaderDataProps,
  MarsRoverTableDataProps,
  marsRoverTableHeader,
} from '../Utils/marsRoversMockUtils';

const meta: Meta<TableProps<MarsRoverTableDataProps, MarsRoverHeaderDataProps>> = {
  title: 'BespokeTable',
  component: Table,
  tags: ['autodocs'],
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
type Story = StoryObj<TableProps<MarsRoverTableDataProps, MarsRoverHeaderDataProps>>;
export const DefaultTable: Story = {};
