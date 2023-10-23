import Table from '../../../src/Table';
import { ffVIIDataMock, ffVIITableHeader } from '../Utils/tableStoriesMock';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TableProps } from '../../../src/type';
import TableWithBorderHeader from '../Components/Header/TableWithBorderHeader';
import TableWithBorderCell from '../Components/Cell/TableWithBorderCell';
import TableWithFullBorderHeader from '../Components/Header/TableWithFullBorderHeader';
import TableWithFullBorderCell from '../Components/Cell/TableWithFullBorderCell';

const meta: Meta<TableProps<string>> = {
  title: 'BespokeTable/Border',
  component: Table,
  args: {
    headers: ffVIITableHeader,
    data: ffVIIDataMock,
  },
  render: (args) => <Table {...args} />,
};

export default meta;
type Story = StoryObj<TableProps<string>>;
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
