import Table from '../../../src/Table';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TableProps } from '../../../src/type';
import TableWithFullBorderHeader from '../Components/Header/TableWithFullBorderHeader';
import ThrowError from '../Components/ThrowError';
import TableWithFullBorderCell from '../Components/Cell/TableWithFullBorderCell';
import CellErrorLayout from '../Components/Cell/CellErrorLayout';
import {
  buildMarsRoverTableData,
  MarsRoverTableDataProps,
  marsRoverTableHeader,
} from '../Utils/marsRoversMockUtils';

const meta: Meta<TableProps<MarsRoverTableDataProps>> = {
  title: 'BespokeTable/Error Management',
  component: Table,
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
    <Table data={buildMarsRoverTableData(roverResponse.rovers)} {...args} />
  ),
};

export default meta;
type Story = StoryObj<TableProps<MarsRoverTableDataProps>>;
export const ErrorBoundaryDefaultRendering: Story = {};
export const ErrorBoundaryCustomRendering: Story = {
  args: {
    fallbackRender: (rowId, header, lastRow) => (
      <CellErrorLayout header={header} lastRow={lastRow} cellValue={'My custom error rendering'} />
    ),
  },
};
