import BespokeTable, { TableProps } from '../../../src/index';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import TableWithColumnsMergedHeader from '../Components/Header/TableWithColumnsMergedHeader';
import TableWithFullBorderCell from '../Components/Cell/TableWithFullBorderCell';
import TableWithFullBorderHeader from '../Components/Header/TableWithFullBorderHeader';
import TableWithCellsMerged from '../Components/Cell/TableWithCellsMerged';
import {
  buildMarsRoverTableData,
  MarsRoverHeaderDataProps,
  MarsRoverTableDataProps,
  marsRoverTableHeader,
} from '../Utils/marsRoversMockUtils';

const meta: Meta<TableProps<MarsRoverTableDataProps, MarsRoverHeaderDataProps>> = {
  title: 'BespokeTable/Cells Merged',
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
export const TableWithColumnsMerged: Story = {
  args: {
    headerCellRender: (header) => <TableWithColumnsMergedHeader header={header} />,
    cellRender: (header, rowProps, value) => (
      <TableWithFullBorderCell header={header} cellValue={value} />
    ),
  },
};

export const TableWithRowsMerged: Story = {
  args: {
    headerCellRender: (header) => <TableWithFullBorderHeader header={header} />,
    cellRender: (header, rowProps, value) => (
      <TableWithCellsMerged header={header} cellValue={value} rowProps={rowProps} />
    ),
  },
};
