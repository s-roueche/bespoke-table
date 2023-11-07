import { generateGridTemplateColumns, generateGridTemplateRows } from '../../src/utils/tableUtils';
import { buildMarsRoverTableDataTest, roversDataTestMock } from '../mock/testMock';

describe('generateGridTemplateColumns', () => {
  test('should return a grid template columns empty with empty headers values', () => {
    expect(generateGridTemplateColumns([])).toEqual('');
  });

  test('should return a grid template columns with default value', () => {
    expect(
      generateGridTemplateColumns([
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
    ).toEqual('1fr 1fr 1fr');
  });

  test('should return a grid template columns with value specified in the header configuration', () => {
    expect(
      generateGridTemplateColumns([
        {
          id: 'test',
          title: 'test',
          width: '2fr',
        },
        {
          id: 'test2',
          title: 'test2',
        },
        {
          id: 'test3',
          title: 'test3',
          width: '50px',
        },
      ]),
    ).toEqual('2fr 1fr 50px');
  });
});

describe('generateGridTemplateRows', () => {
  test('should return a grid template row with only the header height default configuration', () => {
    expect(generateGridTemplateRows([])).toEqual('1fr ');
  });

  test('should return a grid template row with only the header height configuration', () => {
    expect(generateGridTemplateRows([], '50px')).toEqual('50px ');
  });

  test('should return a grid template row corresponding to the rows number', () => {
    expect(generateGridTemplateRows(buildMarsRoverTableDataTest(roversDataTestMock))).toEqual(
      '1fr 1fr 1fr 1fr 1fr',
    );
  });

  test('should return a grid template row corresponding to the rows number', () => {
    expect(
      generateGridTemplateRows(buildMarsRoverTableDataTest(roversDataTestMock, '50px')),
    ).toEqual('1fr 50px 50px 50px 50px');
  });
});
