import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import Table from '../src/Table';
import {
  buildMarsRoverTableDataTest,
  marsRoverTableHeaderTestMock,
  roversDataTestMock,
} from './mock/testMock';

describe('Table component', () => {
  test('renders a basic table component', () => {
    render(
      <Table
        data={buildMarsRoverTableDataTest(roversDataTestMock)}
        headers={marsRoverTableHeaderTestMock}
        headerCellRender={(header) => <span data-testid='header'>{header.title}</span>}
        cellRender={(header, rowId, cellData) => <span data-testid='cell'>{cellData?.value}</span>}
      />,
    );

    const headerElements = screen.getAllByTestId('header');
    expect(headerElements).toHaveLength(5);
    expect(headerElements[0].textContent).toBe('Id');
    expect(headerElements[headerElements.length - 1].textContent).toBe('Photos');

    const cellElements = screen.getAllByTestId('cell');
    expect(cellElements).toHaveLength(20);
    expect(cellElements[0].textContent).toBe('5');
    expect(cellElements[cellElements.length - 1].textContent).toBe('187,992');
  });

  test('renders a table component with pagination', () => {
    render(
      <Table
        data={buildMarsRoverTableDataTest(roversDataTestMock)}
        headers={marsRoverTableHeaderTestMock}
        headerCellRender={(header) => <span data-testid='header'>{header.title}</span>}
        cellRender={(header, rowId, cellData) => <span data-testid='cell'>{cellData?.value}</span>}
        pagination={{
          rowsPerPage: 5,
          itemsPerPage: [5, 10, 20, 50],
          initialPage: 1,
          enablePagination: true,
        }}
        paginationRender={(pagination) => (
          <div data-testid='pagination'>
            <button onClick={() => pagination.handlePageSelectChange(1)}>0</button>
          </div>
        )}
      />,
    );

    const paginationElement = screen.getByTestId('pagination');
    expect(paginationElement).toBeInTheDocument();
  });
});
