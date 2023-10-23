import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import Table from '../src/Table';
import { TableProps } from '../src/type';
import {
  ffVIIDataCustomHeightMock,
  ffVIIDataMock,
  ffVIITableHeader,
  ffVIITableHeaderCustomWidth,
  ffVIITableHeaderWithSorting,
} from './TableStoriesMock';
import TableWithBorderHeader from './Components/Header/TableWithBorderHeader';
import TableWithBorderCell from './Components/Cell/TableWithBorderCell';
import TableWithFullBorderCell from './Components/Cell/TableWithFullBorderCell';
import TableWithFullBorderHeader from './Components/Header/TableWithFullBorderHeader';
import Container from './Components/Container';
import ThrowError from './Components/ThrowError';
import CellErrorLayout from './Components/Cell/CellErrorLayout';
import TableHeaderWithSorting from './Components/Header/TableHeaderWithSorting/TableHeaderWithSorting';
import { SortSwitch } from './Components/Header/TableHeaderWithSorting/SortSwitch';
import Pagination from './Components/Pagination/Pagination';
import { generateData } from './Utils/generateData';

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
      <div style={{ width: '900px' }}>
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
    cellRender={(header, rowProps, value) => <span>{value}</span>}
    {...props}
  />
);

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

export const LoadingData: StoryFn<Omit<TableProps<string>, 'cellRender' | 'headerCellRender'>> = (
  props,
) => (
  <Table<string>
    headerCellRender={(header) => <TableWithFullBorderHeader header={header} />}
    cellRender={(header, rowProps, value) => <span>{value}</span>}
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
    cellRender={(header, rowProps, value) => <span>{value}</span>}
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
    cellRender={(header, rowProps, value) => (
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
    cellRender={(header, rowProps, value) => (
      <TableWithFullBorderCell header={header} cellValue={value} />
    )}
  />
);

export const ColumnSort: StoryFn<Omit<TableProps<string>, 'cellRender' | 'headerCellRender'>> = (
  props,
) => (
  <Table<string>
    {...props}
    headers={ffVIITableHeaderWithSorting}
    headerCellRender={(header, sortComponent) => (
      <TableHeaderWithSorting header={header} sortComponent={sortComponent} />
    )}
    cellRender={(header, rowProps, value) => (
      <TableWithFullBorderCell header={header} cellValue={value} />
    )}
    headerSortComponent={(handleSort, isSortActive, orderDirection) => (
      <SortSwitch
        onClick={handleSort}
        isColumnSortActive={isSortActive}
        orderDirection={orderDirection}
      />
    )}
  />
);

export const TableWithPagination: StoryFn<
  Omit<TableProps<string>, 'cellRender' | 'headerCellRender'>
> = (props) => (
  <Table<string>
    headerCellRender={(header) => <TableWithFullBorderHeader header={header} />}
    cellRender={(header, rowProps, value) => (
      <TableWithFullBorderCell header={header} cellValue={value} />
    )}
    pagination={{ enablePagination: true }}
    paginationRender={(pagination) => <Pagination {...pagination} />}
    {...props}
    data={generateData(100)}
  />
);

export const ErrorBoundaryDefaultRendering: StoryFn<
  Omit<TableProps<string>, 'cellRender' | 'headerCellRender'>
> = (props) => (
  <Table<string>
    {...props}
    data={ffVIIDataCustomHeightMock}
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
