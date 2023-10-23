import Table from '../../../src/Table';
import { ffVIIDataMock, ffVIITableHeader } from '../Utils/tableStoriesMock';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TableProps } from '../../../src/type';
import TableWithFullBorderHeader from '../Components/Header/TableWithFullBorderHeader';
import ThrowError from '../Components/ThrowError';
import TableWithFullBorderCell from '../Components/Cell/TableWithFullBorderCell';
import CellErrorLayout from '../Components/Cell/CellErrorLayout';

const meta: Meta<TableProps<string>> = {
  title: 'BespokeTable/Error Management',
  component: Table,
  args: {
    headers: ffVIITableHeader,
    data: ffVIIDataMock,
    headerCellRender: (header) => <TableWithFullBorderHeader header={header} />,
    cellRender: (header, rowProps, value) =>
      header.id === 'col-role' ? (
        <ThrowError />
      ) : (
        <TableWithFullBorderCell header={header} cellValue={value} />
      ),
  },
  render: (args) => <Table {...args} />,
};

export default meta;
type Story = StoryObj<TableProps<string>>;
export const ErrorBoundaryDefaultRendering: Story = {};
export const ErrorBoundaryCustomRendering: Story = {
  args: {
    fallbackRender: (rowId, header, lastRow) => (
      <CellErrorLayout header={header} lastRow={lastRow} cellValue={'My custom error rendering'} />
    ),
  },
};
