import Table from '../../../src/Table';
import { ffVIIDataMock, ffVIITableHeader } from '../Utils/tableStoriesMock';
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { TableProps } from '../../../src/type';
import TableWithFullBorderHeader from '../Components/Header/TableWithFullBorderHeader';
import ThrowError from '../Components/ThrowError';
import TableWithFullBorderCell from '../Components/Cell/TableWithFullBorderCell';
import CellErrorLayout from '../Components/Cell/CellErrorLayout';

export default {
  title: 'BespokeTable/Error Management',
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

export const ErrorBoundaryDefaultRendering: StoryFn<
  Omit<TableProps<string>, 'cellRender' | 'headerCellRender'>
> = (props) => (
  <Table<string>
    {...props}
    headerCellRender={(header) => <TableWithFullBorderHeader header={header} />}
    cellRender={(header, rowProps, value) =>
      header.id === 'col-role' ? (
        <ThrowError />
      ) : (
        <TableWithFullBorderCell header={header} cellValue={value} />
      )
    }
  />
);

export const ErrorBoundaryCustomRendering: StoryFn<
  Omit<TableProps<string>, 'cellRender' | 'headerCellRender'>
> = (props) => (
  <Table<string>
    {...props}
    headerCellRender={(header) => <TableWithFullBorderHeader header={header} />}
    cellRender={(header, rowProps, value) =>
      header.id === 'col-role' ? (
        <ThrowError />
      ) : (
        <TableWithFullBorderCell header={header} cellValue={value} />
      )
    }
    fallbackRender={(rowId, header, lastRow) => (
      <CellErrorLayout header={header} lastRow={lastRow} cellValue={'My custom error rendering'} />
    )}
  />
);
