import Table from '../../../src/Table';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TableProps } from '../../../src/type';
import TableWithFullBorderHeader from '../Components/Header/TableWithFullBorderHeader';
import TablePagination from '../Components/Pagination/Pagination';
import {
  buildMarsRoverPhotoTableData,
  MarsRoverPhotoTableDataProps,
  marsRoverPhotoTableHeaders,
} from '../Utils/marsRoverPhotoMockUtils';
import CellSorting from '../Components/Cell/CellSorting';

const meta: Meta<TableProps<MarsRoverPhotoTableDataProps>> = {
  title: 'BespokeTable',
  component: Table,
  args: {
    headers: marsRoverPhotoTableHeaders,
    headerCellRender: (header) => <TableWithFullBorderHeader header={header} />,
    cellRender: (header, rowProps, value) => <CellSorting header={header} cellValue={value} />,
    pagination: { enablePagination: true },
    paginationRender: (pagination) => <TablePagination {...pagination} />,
  },
  loaders: [
    async () => ({
      roverPhotoResponse: await (
        await fetch(
          'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2023-7-3&api_key=' +
            process.env.STORYBOOK_API_NASA_KEY,
          { cache: 'force-cache' },
        )
      ).json(),
    }),
  ],
  render: ({ data, ...args }, { loaded: { roverPhotoResponse } }) => (
    <Table data={buildMarsRoverPhotoTableData(roverPhotoResponse.photos)} {...args} />
  ),
};

export default meta;
type Story = StoryObj<TableProps<MarsRoverPhotoTableDataProps>>;
export const Pagination: Story = {};
