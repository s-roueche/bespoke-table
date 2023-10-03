import { TableHeaderProps, TableDataProps } from '../src/type';
export const testMockHeader: TableHeaderProps<string>[] = [
  {
    id: 'col-name',
    title: 'Pokémon Name',
    isFirstColumn: true,
  },
  {
    id: 'col-type',
    title: 'Type',
  },
  {
    id: 'col-attack',
    title: 'Attack',
  },
  {
    id: 'col-evol',
    title: 'Evolution',
    isLastColumn: true,
  },
];

export const testMockData: TableDataProps<string>[] = [
  {
    rowId: 'pokemon-1',
    cells: [
      {
        headerId: 'col-name',
        cellData: 'Pikachu',
      },
      {
        headerId: 'col-type',
        cellData: 'Electric',
      },
      {
        headerId: 'col-attack',
        cellData: 'Thunderbolt',
      },
      {
        headerId: 'col-evol',
        cellData: 'Raichu',
      },
    ],
  },
  {
    rowId: 'pokemon-2',
    cells: [
      {
        headerId: 'col-name',
        cellData: 'Bulbasaur',
      },
      {
        headerId: 'col-type',
        cellData: 'Grass/Poison',
      },
      {
        headerId: 'col-attack',
        cellData: 'Vine Whip',
      },
      {
        headerId: 'col-evol',
        cellData: 'Ivysaur',
      },
    ],
  },
  {
    rowId: 'pokemon-3',
    cells: [
      {
        headerId: 'col-name',
        cellData: 'Squirtle',
      },
      {
        headerId: 'col-type',
        cellData: 'Water',
      },
      {
        headerId: 'col-attack',
        cellData: 'Water Gun',
      },
      {
        headerId: 'col-evol',
        cellData: 'Wartortle',
      },
    ],
  },
];
