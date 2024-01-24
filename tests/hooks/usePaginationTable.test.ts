import { act, renderHook, waitFor } from '@testing-library/react';
import { usePaginationTable } from '../../src/hooks/usePaginationTable';

describe('useOrderTable', () => {
  it('should return usePaginationTable hook with default value', async () => {
    const { result } = renderHook(() => usePaginationTable());
    const {
      currentPage,
      initialPage,
      handlePageSelectChange,
      handleChangeRowsPerPage,
      itemsPerPage,
      rowsPerPage,
      enablePagination,
    } = result.current;

    expect(currentPage).toEqual(1);
    expect(initialPage).toEqual(1);
    expect(itemsPerPage).toEqual([5, 10, 25, 50]);
    expect(rowsPerPage).toEqual(10);
    expect(enablePagination).toBeFalsy();
    expect(handlePageSelectChange).toBeInstanceOf(Function);
    expect(handleChangeRowsPerPage).toBeInstanceOf(Function);
  });

  it('should return usePaginationTable hook with specific value', async () => {
    const { result } = renderHook(() =>
      usePaginationTable({
        enablePagination: true,
        initialPage: 2,
        rowsPerPage: 5,
        itemsPerPage: [5, 10, 25, 50, 100],
      }),
    );
    const {
      currentPage,
      initialPage,
      handlePageSelectChange,
      handleChangeRowsPerPage,
      itemsPerPage,
      rowsPerPage,
      enablePagination,
    } = result.current;

    expect(currentPage).toEqual(2);
    expect(initialPage).toEqual(2);
    expect(itemsPerPage).toEqual([5, 10, 25, 50, 100]);
    expect(rowsPerPage).toEqual(5);
    expect(enablePagination).toBeTruthy();
    expect(handlePageSelectChange).toBeInstanceOf(Function);
    expect(handleChangeRowsPerPage).toBeInstanceOf(Function);
  });

  it('should fire event page select to go to page 2', async () => {
    const { result } = renderHook(() => usePaginationTable());
    const { handlePageSelectChange } = result.current;

    act(() => {
      handlePageSelectChange(2);
    });

    await waitFor(() => {
      expect(result.current.currentPage).toEqual(2);
    });
  });

  it('should fire event change row per page', async () => {
    const { result } = renderHook(() => usePaginationTable());
    const { handleChangeRowsPerPage } = result.current;

    act(() => {
      handleChangeRowsPerPage(25);
    });

    await waitFor(() => {
      expect(result.current.rowsPerPage).toEqual(25);
    });
  });
});
