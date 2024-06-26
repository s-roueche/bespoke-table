import BespokeTable, { TableProps } from '../../../src/index';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import TableWithBorderHeader from '../Components/Header/TableWithBorderHeader';
import TableWithBorderCell from '../Components/Cell/TableWithBorderCell';
import TableWithFullBorderHeader from '../Components/Header/TableWithFullBorderHeader';
import TableWithFullBorderCell from '../Components/Cell/TableWithFullBorderCell';
import {
  buildMarsRoverTableData,
  MarsRoverHeaderDataProps,
  MarsRoverTableDataProps,
  marsRoverTableHeader,
} from '../Utils/marsRoversMockUtils';

const meta: Meta<TableProps<MarsRoverTableDataProps, MarsRoverHeaderDataProps>> = {
  title: 'BespokeTable/Border',
  component: BespokeTable,
  args: {
    headers: marsRoverTableHeader,
  },
  render: ({ data, ...args }, { loaded: { roverResponse } }) => (
    <BespokeTable data={buildMarsRoverTableData(roverResponse.rovers)} {...args} />
  ),
};

export default meta;
type Story = StoryObj<TableProps<MarsRoverTableDataProps, MarsRoverHeaderDataProps>>;
export const TableWithBorder: Story = {
  args: {
    headerCellRender: (header) => <TableWithBorderHeader header={header} />,
    cellRender: (header, rowProps, value) => (
      <TableWithBorderCell header={header} lastRow={rowProps.lastRow} cellValue={value} />
    ),
  },
};
export const TableWithFullBorder: Story = {
  args: {
    headerCellRender: (header) => <TableWithFullBorderHeader header={header} />,
    cellRender: (header, rowProps, value) => (
      <TableWithFullBorderCell header={header} cellValue={value} />
    ),
  },
};
