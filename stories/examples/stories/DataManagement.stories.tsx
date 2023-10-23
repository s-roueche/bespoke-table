import Table from '../../../src/Table';
import { ffVIIDataMock, ffVIITableHeader } from '../Utils/tableStoriesMock';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TableProps } from '../../../src/type';
import TableWithFullBorderHeader from '../Components/Header/TableWithFullBorderHeader';
import Container from '../Components/Container';

const meta: Meta<TableProps<string>> = {
  title: 'BespokeTable/Data Management',
  component: Table,
  args: {
    headers: ffVIITableHeader,
    data: ffVIIDataMock,
    headerCellRender: (header) => <TableWithFullBorderHeader header={header} />,
    cellRender: (header, rowProps, value) => <span>{value}</span>,
  },
  render: (args) => <Table {...args} />,
};

export default meta;
type Story = StoryObj<TableProps<string>>;
export const LoadingData: Story = {
  args: {
    isLoading: true,
    loadingComponent: (
      <Container>
        <div className='lds-ellipsis'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Container>
    ),
  },
};

export const NoDataAvailable: Story = {
  args: { data: [], noDataComponent: <Container>No data available</Container> },
};
