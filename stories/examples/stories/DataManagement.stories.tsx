import BespokeTable, { TableProps } from '../../../src/index';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import TableWithFullBorderHeader from '../Components/Header/TableWithFullBorderHeader';
import Container from '../Components/Container';
import {
  MarsRoverHeaderDataProps,
  MarsRoverTableDataProps,
  marsRoverTableHeader,
} from '../Utils/marsRoversMockUtils';

const meta: Meta<TableProps<MarsRoverTableDataProps, MarsRoverHeaderDataProps>> = {
  title: 'BespokeTable/Data Management',
  component: BespokeTable,
  args: {
    headers: marsRoverTableHeader,
    data: [],
    headerCellRender: (header) => <TableWithFullBorderHeader header={header} />,
    cellRender: () => <></>,
  },
  render: (args) => <BespokeTable {...args} />,
};

export default meta;
type Story = StoryObj<TableProps<MarsRoverTableDataProps, MarsRoverHeaderDataProps>>;
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
