import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import Table from '../src/Table';
import { TableProps } from '../src/type';
import { pokemonDataMock, pokemonTableHeader } from './TableStoriesMock';
import TableWithBorderHeader from './Components/TableWithBorder/TableWithBorderHeader';
import TableWithBorderCell from './Components/TableWithBorder/TableWithBorderCell';
import TableWithFullBorderCell from './Components/TableWithFullBorder/TableWithFullBorderCell';
import TableWithFullBorderHeader from './Components/TableWithFullBorder/TableWithFullBorderHeader';

export default {
  title: 'ReactLightTable/Table',
  component: Table,
  args: {
    headers: pokemonTableHeader,
    data: pokemonDataMock,
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '700px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

export const Default: StoryFn<Omit<TableProps<string>, 'cellRender' | 'headerCellRender'>> = (
  props,
) => (
  <Table<string>
    headerCellRender={(header) => <span>{header.title}</span>}
    cellRender={(header, rowId, lastRow, value) => <span>{value}</span>}
    {...props}
  />
);

export const TableWithBorder: StoryFn<
  Omit<TableProps<string>, 'cellRender' | 'headerCellRender'>
> = (props) => (
  <Table<string>
    headerCellRender={(header) => <TableWithBorderHeader header={header} />}
    cellRender={(header, rowId, lastRow, value) => (
      <TableWithBorderCell header={header} lastRow={lastRow} cellValue={value} />
    )}
    {...props}
  />
);

export const TableWithFullBorder: StoryFn<
  Omit<TableProps<string>, 'cellRender' | 'headerCellRender'>
> = (props) => (
  <Table<string>
    headerCellRender={(header) => <TableWithFullBorderHeader header={header} />}
    cellRender={(header, rowId, lastRow, value) => (
      <TableWithFullBorderCell header={header} cellValue={value} />
    )}
    {...props}
  />
);
