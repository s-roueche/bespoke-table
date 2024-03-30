import { getDataPaginated } from '../../src/utils/tablePaginationUtils';
import { generateBasicMockData } from '../mock/generateBasicMockData';

import { UsePaginationTableProps } from '../../src';

describe('tablePaginationUtils', () => {
  const paginationConfiguration: Pick<
    UsePaginationTableProps,
    'currentPage' | 'rowsPerPage' | 'enablePagination'
  > = {
    currentPage: 1,
    rowsPerPage: 5,
    enablePagination: true,
  };

  it('should return a empty table for empty data', () => {
    const tablePaginated = getDataPaginated([], paginationConfiguration);
    expect(tablePaginated).toEqual([]);
  });

  it('should return all data when pagination is disabled', () => {
    const data = generateBasicMockData(15);
    const tablePaginated = getDataPaginated(data, {
      ...paginationConfiguration,
      enablePagination: false,
    });
    expect(tablePaginated).toEqual(data);
  });

  it('should return a table with 5 rows', () => {
    const data = generateBasicMockData(15);
    const tablePaginated = getDataPaginated(data, paginationConfiguration);
    expect(tablePaginated).toHaveLength(5);
  });
});
