import Table from '../../../src/Table';
import { ffVIIDataMock, ffVIITableHeader } from '../Utils/tableStoriesMock';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TableProps } from '../../../src/type';

const meta: Meta<TableProps<string>> = {
  title: 'BespokeTable',
  component: Table,
  args: {
    headers: ffVIITableHeader,
    data: ffVIIDataMock,
    headerCellRender: (header) => <span>{header.title}</span>,
    cellRender: (header, rowProps, value) => <span>{value}</span>,
  },
  render: (args) => <Table {...args} />,
};

export default meta;
type Story = StoryObj<TableProps<string>>;
export const DefaultTable: Story = {};
