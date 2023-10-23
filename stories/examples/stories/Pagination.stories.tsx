import Table from '../../../src/Table';
import { ffVIITableHeader } from '../Utils/tableStoriesMock';
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { TableProps } from '../../../src/type';
import TableWithFullBorderHeader from '../Components/Header/TableWithFullBorderHeader';
import TableWithFullBorderCell from '../Components/Cell/TableWithFullBorderCell';
import TablePagination from '../Components/Pagination/Pagination';
import { generateData } from '../Utils/generateData';

export default {
  title: 'BespokeTable',
  component: Table,
  args: {
    headers: ffVIITableHeader,
    data: generateData(100),
    pagination: { enablePagination: true },
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '900px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

export const Pagination: StoryFn<Omit<TableProps<string>, 'cellRender' | 'headerCellRender'>> = (
  props,
) => (
  <Table<string>
    headerCellRender={(header) => <TableWithFullBorderHeader header={header} />}
    cellRender={(header, rowProps, value) => (
      <TableWithFullBorderCell header={header} cellValue={value} />
    )}
    paginationRender={(pagination) => <TablePagination {...pagination} />}
    {...props}
  />
);
