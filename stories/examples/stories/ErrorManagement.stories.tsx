import BespokeTable, { TableProps } from '../../../src/index';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import TableWithFullBorderHeader from '../Components/Header/TableWithFullBorderHeader';
import ThrowError from '../Components/ThrowError';
import TableWithFullBorderCell from '../Components/Cell/TableWithFullBorderCell';
import CellErrorLayout from '../Components/Cell/CellErrorLayout';
import {
  buildMarsRoverTableData,
  MarsRoverHeaderDataProps,
  MarsRoverTableDataProps,
  marsRoverTableHeader,
} from '../Utils/marsRoversMockUtils';

const meta: Meta<TableProps<MarsRoverTableDataProps, MarsRoverHeaderDataProps>> = {
  title: 'BespokeTable/Error Management',
  component: BespokeTable,
  args: {
    headers: marsRoverTableHeader,
    headerCellRender: (header) => <TableWithFullBorderHeader header={header} />,
    cellRender: (header, rowProps, value) =>
      header.id === 'col-name' ? (
        <ThrowError />
      ) : (
        <TableWithFullBorderCell header={header} cellValue={value} />
      ),
  },
  render: ({ data, ...args }, { loaded: { roverResponse } }) => (
    <BespokeTable data={buildMarsRoverTableData(roverResponse.rovers)} {...args} />
  ),
};

export default meta;
type Story = StoryObj<TableProps<MarsRoverTableDataProps, MarsRoverHeaderDataProps>>;
export const ErrorBoundaryDefaultRendering: Story = {};
export const ErrorBoundaryCustomRendering: Story = {
  args: {
    fallbackRender: (rowId, header, lastRow) => (
      <CellErrorLayout header={header} lastRow={lastRow} cellValue={'My custom error rendering'} />
    ),
  },
};
