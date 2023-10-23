import Table from '../../../src/Table';
import { ffVIIDataMock, ffVIITableHeader } from '../Utils/tableStoriesMock';
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { TableProps } from '../../../src/type';
import TableWithBorderHeader from '../Components/Header/TableWithBorderHeader';
import TableWithBorderCell from '../Components/Cell/TableWithBorderCell';
import TableWithFullBorderHeader from '../Components/Header/TableWithFullBorderHeader';
import TableWithFullBorderCell from '../Components/Cell/TableWithFullBorderCell';

export default {
  title: 'BespokeTable/Border',
  component: Table,
  args: {
    headers: ffVIITableHeader,
    data: ffVIIDataMock,
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

export const TableWithBorder: StoryFn<
  Omit<TableProps<string>, 'cellRender' | 'headerCellRender'>
> = (props) => (
  <Table<string>
    headerCellRender={(header) => <TableWithBorderHeader header={header} />}
    cellRender={(header, rowProps, value) => (
      <TableWithBorderCell header={header} lastRow={rowProps.lastRow} cellValue={value} />
    )}
    {...props}
  />
);

export const TableWithFullBorder: StoryFn<
  Omit<TableProps<string>, 'cellRender' | 'headerCellRender'>
> = (props) => (
  <Table<string>
    headerCellRender={(header) => <TableWithFullBorderHeader header={header} />}
    cellRender={(header, rowProps, value) => (
      <TableWithFullBorderCell header={header} cellValue={value} />
    )}
    {...props}
  />
);
