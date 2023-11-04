import React from 'react';
import { render } from '@testing-library/react';
import Table from '../src/Table';
import {
  buildMarsRoverTableDataTest,
  marsRoverTableHeaderTestMock,
  roversDataTestMock,
} from './mock/testMock';

describe('Table', () => {
  test('renders the Table component', () => {
    render(
      <Table
        data={buildMarsRoverTableDataTest(roversDataTestMock)}
        headers={marsRoverTableHeaderTestMock}
        headerCellRender={(header) => <span>{header.title}</span>}
        cellRender={(header, rowId, cellData) => <span>{cellData?.value}</span>}
      />,
    );
  });
});
