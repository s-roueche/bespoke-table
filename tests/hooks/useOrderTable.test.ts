import { useTableSort } from '../../src/hooks/useOrderTable';
import { act, renderHook, waitFor } from '@testing-library/react';
import { MarsRoverHeaderDataProps } from '../../stories/examples/Utils/marsRoversMockUtils';
import { TableHeaderProps } from '../../src';

describe('useOrderTable', () => {
  const headers: TableHeaderProps<String, MarsRoverHeaderDataProps>[] = [
    {
      id: 'column-id-1',
      title: 'Column 1',
    },
    {
      id: 'column-id-2',
      title: 'Column 2',
      propertyKeyToOrder: 'valueOf',
      defaultSortDirection: 'asc',
    },
    {
      id: 'column-id-3',
      title: 'Column 3',
    },
  ];

  it('should return useTableSort hook with default value', async () => {
    const { result } = renderHook(() => useTableSort(headers));
    const { order, orderByColumnId, propertyKeyToOrder, handleSort } = result.current;

    expect(order).toBeDefined();
    expect(orderByColumnId).toBeDefined();
    expect(propertyKeyToOrder).toBeDefined();
    expect(handleSort).toBeDefined();
    expect(handleSort).toBeInstanceOf(Function);
    expect(order).toEqual('asc');
    expect(orderByColumnId).toEqual('column-id-2');
    expect(propertyKeyToOrder).toEqual('valueOf');
  });

  it('should return useTableSort hook with no default column sorted', async () => {
    const { result } = renderHook(() =>
      useTableSort([
        {
          id: 'test',
          title: 'test',
        },
        {
          id: 'test2',
          title: 'test2',
        },
        {
          id: 'test3',
          title: 'test3',
        },
      ]),
    );
    const { order, orderByColumnId, propertyKeyToOrder, handleSort } = result.current;
    expect(order).toBeDefined();
    expect(orderByColumnId).toBeUndefined();
    expect(propertyKeyToOrder).toBeUndefined();
    expect(handleSort).toBeInstanceOf(Function);
    expect(order).toEqual('asc');
  });

  it('should initially return id column test2 then test ', async () => {
    const { result } = renderHook(() => useTableSort(headers));
    const { handleSort } = result.current;

    expect(handleSort).toBeDefined();

    act(() => {
      handleSort('column-id-1', 'valueOf', 'desc');
    });

    await waitFor(() => {
      expect(result.current.order).toEqual('desc');
      expect(result.current.orderByColumnId).toEqual('column-id-1');
      expect(result.current.propertyKeyToOrder).toEqual('valueOf');
    });
  });
});
