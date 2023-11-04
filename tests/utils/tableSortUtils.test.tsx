import {
  getDataSorted,
  getDefaultColumnSort,
  getNextOrderDirection,
} from '../../src/utils/tableSortUtils';
import { TableHeaderProps } from '../../src/type';
import {
  buildMarsRoverTableDataTest,
  MarsRoverTableDataTestProps,
  roversDataTestMock,
} from '../mock/testMock';
import { generateBasicMockData } from '../mock/generateBasicMockData';

describe('getDefaultColumnSort', () => {
  const headers: TableHeaderProps<String>[] = [
    {
      id: 'test',
      title: 'test',
    },
    {
      id: 'test2',
      title: 'test2',
      propertyKeyToOrder: 'valueOf',
      defaultSortDirection: 'asc',
    },
    {
      id: 'test3',
      title: 'test3',
    },
  ];

  test('should return the default column sort', () => {
    expect(getDefaultColumnSort(headers)).toEqual({
      id: 'test2',
      title: 'test2',
      propertyKeyToOrder: 'valueOf',
      defaultSortDirection: 'asc',
    });
  });
});

describe('getDataSorted', () => {
  const tableData = buildMarsRoverTableDataTest(roversDataTestMock);

  test('should return the table not sorted', () => {
    expect(
      getDataSorted<MarsRoverTableDataTestProps>(undefined, undefined, tableData, 'asc'),
    ).toEqual(tableData);
  });

  test('should return the table empty table without any error', () => {
    expect(getDataSorted<MarsRoverTableDataTestProps>('col-name', 'value', [], 'asc')).toEqual([]);
  });

  test('Should return a table sorted asc by name', () => {
    const tableDataSorted = getDataSorted<MarsRoverTableDataTestProps>(
      'col-name',
      'value',
      tableData,
      'asc',
    );
    const cell = tableDataSorted[0].cells.find((cell) => cell.headerId === 'col-name');
    expect(cell?.cellData?.value).toEqual('Curiosity');
  });

  test('Should return a table sorted desc by name', () => {
    const tableDataSorted = getDataSorted<MarsRoverTableDataTestProps>(
      'col-name',
      'value',
      tableData,
      'desc',
    );
    const cell = tableDataSorted[0].cells.find((cell) => cell.headerId === 'col-name');
    expect(cell?.cellData?.value).toEqual('Spirit');
  });

  test('Should return a table sorted from a function', () => {
    const tableDataSorted = getDataSorted<string>(
      'col-name',
      'valueOf',
      generateBasicMockData(6),
      'desc',
    );
    const cell = tableDataSorted[0].cells.find((cell) => cell.headerId === 'col-name');
    expect(cell?.cellData).toEqual('Data for Name 5');
  });

  test('Should return a table sorted with equals celle value', () => {
    const data = [
      {
        rowId: '27387f3c-3391-47a1-a352-58c003f4f1b5',
        cells: [
          { headerId: 'col-name', cellData: 'Ryan Gosling' },
          { headerId: 'col-role', cellData: 'Acteur' },
        ],
      },
      {
        rowId: '63a33cd2-246e-4e7e-883c-326f899fd66c',
        cells: [
          { headerId: 'col-name', cellData: 'Morgan Freeman' },
          { headerId: 'col-role', cellData: 'Acteur' },
        ],
      },
      {
        rowId: '87f245a6-6a1d-4afe-b189-48588993eb12',
        cells: [
          { headerId: 'col-name', cellData: 'Ryan Gosling' },
          { headerId: 'col-role', cellData: 'Acteur' },
        ],
      },
    ];

    const tableDataSorted = getDataSorted<string>('col-name', 'valueOf', data, 'asc');
    const cell = tableDataSorted[0].cells.find((cell) => cell.headerId === 'col-name');
    expect(cell?.cellData).toEqual('Morgan Freeman');
  });

  test('Should return a table sorted with cell value undefined', () => {
    const data = [
      {
        rowId: '27387f3c-3391-47a1-a352-58c003f4f1b5',
        cells: [
          { headerId: 'col-name', cellData: 'Ryan Gosling' },
          { headerId: 'col-role', cellData: 'Acteur' },
        ],
      },
      {
        rowId: '63a33cd2-246e-4e7e-883c-326f899fd66c',
        cells: [
          { headerId: 'col-name', cellData: 'Morgan Freeman' },
          { headerId: 'col-role', cellData: 'Acteur' },
        ],
      },
      {
        rowId: '87f245a6-6a1d-4afe-b189-48588993eb12',
        cells: [
          { headerId: 'col-name', cellData: undefined },
          { headerId: 'col-role', cellData: 'Acteur' },
        ],
      },
    ];

    const tableDataSorted = getDataSorted<string>('col-name', 'valueOf', data, 'asc');
    const cell = tableDataSorted[0].cells.find((cell) => cell.headerId === 'col-name');
    expect(cell?.cellData).toEqual('Morgan Freeman');
  });
});

describe('getDataSorted', () => {
  test('should return desc sorted direction for the active sorted column', () => {
    expect(getNextOrderDirection('col-name', 'asc', 'col-name')).toEqual('desc');
  });

  test('should return asc sorted direction for the active sorted column', () => {
    expect(getNextOrderDirection('col-name', 'desc', 'col-name')).toEqual('asc');
  });

  test('should return asc direction for a not active sorted column', () => {
    expect(getNextOrderDirection('col-name', 'asc', 'col-role')).toEqual('asc');
  });
});
