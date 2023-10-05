import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import Table from '../src/Table';
import { TableProps } from '../src/type';
import {
  ffVIIDataCustomHeightMock,
  ffVIIDataMock,
  ffVIITableHeader,
  ffVIITableHeaderCustomWidth,
} from './TableStoriesMock';
import TableWithBorderHeader from './Components/TableWithBorder/TableWithBorderHeader';
import TableWithBorderCell from './Components/TableWithBorder/TableWithBorderCell';
import TableWithFullBorderCell from './Components/TableWithFullBorder/TableWithFullBorderCell';
import TableWithFullBorderHeader from './Components/TableWithFullBorder/TableWithFullBorderHeader';
import Container from './Components/Container';
import ThrowError from './Components/ThrowError';
import CellErrorLayout from './Components/Cell/CellErrorLayout';

export default {
  title: 'BespokeTable/Examples',
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

export const LoadingData: StoryFn<Omit<TableProps<string>, 'cellRender' | 'headerCellRender'>> = (
  props,
) => (
  <Table<string>
    headerCellRender={(header) => <TableWithFullBorderHeader header={header} />}
    cellRender={(header, rowId, lastRow, value) => <span>{value}</span>}
    isLoading={true}
    loadingComponent={
      <Container>
        <div className='lds-ellipsis'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Container>
    }
    {...props}
  />
);

export const NoDataAvailable: StoryFn<
  Omit<TableProps<string>, 'cellRender' | 'headerCellRender'>
> = (props) => (
  <Table<string>
    {...props}
    headerCellRender={(header) => <TableWithFullBorderHeader header={header} />}
    cellRender={(header, rowId, lastRow, value) => <span>{value}</span>}
    noDataComponent={<Container>No data available</Container>}
    data={[]}
  />
);

export const ColumnCustomWidth: StoryFn<
  Omit<TableProps<string>, 'cellRender' | 'headerCellRender'>
> = (props) => (
  <Table<string>
    {...props}
    headers={ffVIITableHeaderCustomWidth}
    headerCellRender={(header) => <TableWithFullBorderHeader header={header} />}
    cellRender={(header, rowId, lastRow, value) => (
      <TableWithFullBorderCell header={header} cellValue={value} />
    )}
  />
);

export const ColumnCustomHeight: StoryFn<
  Omit<TableProps<string>, 'cellRender' | 'headerCellRender'>
> = (props) => (
  <Table<string>
    {...props}
    data={ffVIIDataCustomHeightMock}
    headerCellRender={(header) => <TableWithFullBorderHeader header={header} />}
    cellRender={(header, rowId, lastRow, value) => (
      <TableWithFullBorderCell header={header} cellValue={value} />
    )}
  />
);

export const ErrorBoundaryDefaultRendering: StoryFn<
  Omit<TableProps<string>, 'cellRender' | 'headerCellRender'>
> = (props) => (
  <Table<string>
    {...props}
    data={ffVIIDataCustomHeightMock}
    headerCellRender={(header) => <TableWithFullBorderHeader header={header} />}
    cellRender={(header, rowId, lastRow, value) =>
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
    cellRender={(header, rowId, lastRow, value) =>
      header.id === 'col-role' ? (
        <ThrowError />
      ) : (
        <TableWithFullBorderCell header={header} cellValue={value} />
      )
    }
    fallbackRender={(rowId, header, lastRow, cell) => (
      <CellErrorLayout header={header} lastRow={lastRow} cellValue={'My custom error rendering'} />
    )}
  />
);
