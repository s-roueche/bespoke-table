import Table from '../../../src/Table';
import { ffVIIDataMock, ffVIITableHeader } from '../Utils/tableStoriesMock';
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { TableProps } from '../../../src/type';
import TableWithFullBorderHeader from '../Components/Header/TableWithFullBorderHeader';
import Container from '../Components/Container';

export default {
  title: 'BespokeTable/Data Management',
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
    headerCellRender={(header) => <TableWithFullBorderHeader header={header} />}
    cellRender={(header, rowProps, value) => <span>{value}</span>}
    noDataComponent={<Container>No data available</Container>}
    {...props}
    data={[]}
  />
);
