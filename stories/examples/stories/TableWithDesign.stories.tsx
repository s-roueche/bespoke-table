import BespokeTable, { TableProps } from '../../../src/index';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import HeaderDesign from '../Components/Header/HeaderDesign';
import CellDesign from '../Components/Cell/CellDesign';
import {
  buildMarsRoverTableData,
  MarsRoverHeaderDataProps,
  MarsRoverTableDataProps,
  marsRoverTableHeader,
} from '../Utils/marsRoversMockUtils';

const meta: Meta<TableProps<MarsRoverTableDataProps, MarsRoverHeaderDataProps>> = {
  title: 'BespokeTable',
  component: BespokeTable,
  args: {
    headers: marsRoverTableHeader,
    headerCellRender: (header) => <HeaderDesign header={header} />,
    cellRender: (header, rowProps, value) => (
      <CellDesign header={header} cellValue={value} rowProps={rowProps} />
    ),
    headerHeight: '60px',
  },
  render: ({ data, ...args }, { loaded: { roverResponse } }) => (
    <BespokeTable data={buildMarsRoverTableData(roverResponse.rovers, '50px', true)} {...args} />
  ),
  parameters: {
    backgrounds: {
      default: 'gradient',
      values: [
        { name: 'gradient', value: 'linear-gradient(45deg,#4158d0,#c850c0)', default: true },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '900px', color: 'gray', fontSize: '15px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<TableProps<MarsRoverTableDataProps, MarsRoverHeaderDataProps>>;
export const FullyDesigned: Story = {};
