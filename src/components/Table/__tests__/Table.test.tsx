import React from 'react';
import { render } from '@testing-library/react';
import Table from '../Table';
import { testMockData, testMockHeader } from './tableTestMock';

describe('Table', () => {
  test('renders the Table component', () => {
    render(
      <Table
        data={testMockData}
        headers={testMockHeader}
        headerCellRender={(header) => <span>{header.title}</span>}
        cellRender={(header, rowId, lastRow, value) => <span>{value}</span>}
      />,
    );
  });
});
