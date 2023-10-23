import Table from '../../../src/Table';
import { ffVIITableHeader } from '../Utils/tableStoriesMock';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TableProps } from '../../../src/type';
import TableWithFullBorderHeader from '../Components/Header/TableWithFullBorderHeader';
import TableWithFullBorderCell from '../Components/Cell/TableWithFullBorderCell';
import TablePagination from '../Components/Pagination/Pagination';
import { generateData } from '../Utils/generateData';

const meta: Meta<TableProps<string>> = {
  title: 'BespokeTable',
  component: Table,
  args: {
    headers: ffVIITableHeader,
    data: generateData(100),
    headerCellRender: (header) => <TableWithFullBorderHeader header={header} />,
    cellRender: (header, rowProps, value) => (
      <TableWithFullBorderCell header={header} cellValue={value} />
    ),
    pagination: { enablePagination: true },
    paginationRender: (pagination) => <TablePagination {...pagination} />,
  },
  render: (args) => <Table {...args} />,
};

export default meta;
type Story = StoryObj<TableProps<string>>;
export const Pagination: Story = {};
