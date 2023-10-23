import { TableHeaderProps, TableDataProps } from '../src/type';

export const ffVIITableHeader: TableHeaderProps<string>[] = [
  {
    id: 'col-name',
    title: 'Name',
    isFirstColumn: true,
  },
  {
    id: 'col-role',
    title: 'Role',
  },
  {
    id: 'col-weapon',
    title: 'Weapon',
  },
  {
    id: 'col-class',
    title: 'Class',
    isLastColumn: true,
  },
];

export const ffVIIDataMock: TableDataProps<string>[] = [
  {
    rowId: 'ff7-1',
    cells: [
      {
        headerId: 'col-name',
        cellData: 'Cloud Strife',
      },
      {
        headerId: 'col-role',
        cellData: 'Main Protagonist',
      },
      {
        headerId: 'col-weapon',
        cellData: 'Buster Sword',
      },
      {
        headerId: 'col-class',
        cellData: 'Soldier',
      },
    ],
  },
  {
    rowId: 'ff7-2',
    cells: [
      {
        headerId: 'col-name',
        cellData: 'Aerith Gainsborough',
      },
      {
        headerId: 'col-role',
        cellData: 'Protagonist',
      },
      {
        headerId: 'col-weapon',
        cellData: 'Guard Stick',
      },
      {
        headerId: 'col-class',
        cellData: 'Healer',
      },
    ],
  },
  {
    rowId: 'ff7-3',
    cells: [
      {
        headerId: 'col-name',
        cellData: 'Tifa Lockhart',
      },
      {
        headerId: 'col-role',
        cellData: 'Protagonist',
      },
      {
        headerId: 'col-weapon',
        cellData: 'Fists',
      },
      {
        headerId: 'col-class',
        cellData: 'Fighter',
      },
    ],
  },
  {
    rowId: 'ff7-4',
    cells: [
      {
        headerId: 'col-name',
        cellData: 'Barret Wallace',
      },
      {
        headerId: 'col-role',
        cellData: 'Protagonist',
      },
      {
        headerId: 'col-weapon',
        cellData: 'Gun-Arm',
      },
      {
        headerId: 'col-class',
        cellData: 'Resistant',
      },
    ],
  },
];

export const ffVIITableHeaderCustomWidth: TableHeaderProps<string>[] = [
  {
    id: 'col-name',
    title: 'Name',
    isFirstColumn: true,
    width: '2fr',
  },
  {
    id: 'col-role',
    title: 'Role',
  },
  {
    id: 'col-weapon',
    title: 'Weapon',
  },
  {
    id: 'col-class',
    title: 'Class',
    isLastColumn: true,
  },
];

export const ffVIIDataCustomHeightMock: TableDataProps<string>[] = [
  {
    rowId: 'ff7-1',
    cells: [
      {
        headerId: 'col-name',
        cellData: 'Cloud Strife',
      },
      {
        headerId: 'col-role',
        cellData: 'Main Protagonist',
      },
      {
        headerId: 'col-weapon',
        cellData: 'Buster Sword',
      },
      {
        headerId: 'col-class',
        cellData: 'Soldier',
      },
    ],
  },
  {
    rowId: 'ff7-2',
    rowHeight: '4fr',
    cells: [
      {
        headerId: 'col-name',
        cellData: 'Aerith Gainsborough',
      },
      {
        headerId: 'col-role',
        cellData: 'Protagonist',
      },
      {
        headerId: 'col-weapon',
        cellData: 'Guard Stick',
      },
      {
        headerId: 'col-class',
        cellData: 'Healer',
      },
    ],
  },
  {
    rowId: 'ff7-3',
    cells: [
      {
        headerId: 'col-name',
        cellData: 'Tifa Lockhart',
      },
      {
        headerId: 'col-role',
        cellData: 'Protagonist',
      },
      {
        headerId: 'col-weapon',
        cellData: 'Fists',
      },
      {
        headerId: 'col-class',
        cellData: 'Fighter',
      },
    ],
  },
  {
    rowId: 'ff7-4',
    cells: [
      {
        headerId: 'col-name',
        cellData: 'Barret Wallace',
      },
      {
        headerId: 'col-role',
        cellData: 'Protagonist',
      },
      {
        headerId: 'col-weapon',
        cellData: 'Gun-Arm',
      },
      {
        headerId: 'col-class',
        cellData: 'Resistant',
      },
    ],
  },
];

export const ffVIITableHeaderCustomDesign: TableHeaderProps<string>[] = [
  {
    id: 'col-name',
    title: 'Name',
    isFirstColumn: true,
  },
  {
    id: 'col-role',
    title: 'Role',
  },
  {
    id: 'col-weapon',
    title: 'Weapon',
  },
  {
    id: 'col-class',
    title: 'Class',
    isLastColumn: true,
  },
];

export const ffVIIDataWihDesignMock: TableDataProps<string>[] = [
  {
    rowId: 'ff7-1',
    rowHeight: '50px',
    className: 'odd',
    cells: [
      {
        headerId: 'col-name',
        cellData: 'Cloud Strife',
      },
      {
        headerId: 'col-role',
        cellData: 'Main Protagonist',
      },
      {
        headerId: 'col-weapon',
        cellData: 'Buster Sword',
      },
      {
        headerId: 'col-class',
        cellData: 'Soldier',
      },
    ],
  },
  {
    rowId: 'ff7-2',
    rowHeight: '50px',
    cells: [
      {
        headerId: 'col-name',
        cellData: 'Aerith Gainsborough',
      },
      {
        headerId: 'col-role',
        cellData: 'Protagonist',
      },
      {
        headerId: 'col-weapon',
        cellData: 'Guard Stick',
      },
      {
        headerId: 'col-class',
        cellData: 'Healer',
      },
    ],
  },
  {
    rowId: 'ff7-3',
    rowHeight: '50px',
    className: 'odd',
    cells: [
      {
        headerId: 'col-name',
        cellData: 'Tifa Lockhart',
      },
      {
        headerId: 'col-role',
        cellData: 'Protagonist',
      },
      {
        headerId: 'col-weapon',
        cellData: 'Fists',
      },
      {
        headerId: 'col-class',
        cellData: 'Fighter',
      },
    ],
  },
  {
    rowId: 'ff7-4',
    rowHeight: '50px',
    cells: [
      {
        headerId: 'col-name',
        cellData: 'Barret Wallace',
      },
      {
        headerId: 'col-role',
        cellData: 'Protagonist',
      },
      {
        headerId: 'col-weapon',
        cellData: 'Gun-Arm',
      },
      {
        headerId: 'col-class',
        cellData: 'Resistant',
      },
    ],
  },
];

export const ffVIITableHeaderWithSorting: TableHeaderProps<string>[] = [
  {
    id: 'col-name',
    title: 'Name',
    isFirstColumn: true,
    propertyKeyToOrder: 'toString',
    defaultSortDirection: 'asc',
  },
  {
    id: 'col-role',
    title: 'Role',
  },
  {
    id: 'col-weapon',
    title: 'Weapon',
    propertyKeyToOrder: 'toString',
  },
  {
    id: 'col-class',
    title: 'Class',
    isLastColumn: true,
    propertyKeyToOrder: 'toString',
  },
];

export const ffVIIWithMergedRowsDataMock: TableDataProps<string>[] = [
  {
    rowId: 'ff7-1',
    meta: {
      espaceRoleColumn: false,
    },
    cells: [
      {
        headerId: 'col-name',
        cellData: 'Cloud Strife',
      },
      {
        headerId: 'col-role',
        cellData: 'Main Protagonist',
      },
      {
        headerId: 'col-weapon',
        cellData: 'Buster Sword',
      },
      {
        headerId: 'col-class',
        cellData: 'Soldier',
      },
    ],
  },
  {
    rowId: 'ff7-2',
    meta: {
      espaceRoleColumn: false,
    },
    cells: [
      {
        headerId: 'col-name',
        cellData: 'Aerith Gainsborough',
      },
      {
        headerId: 'col-role',
        cellData: 'Protagonist',
      },
      {
        headerId: 'col-weapon',
        cellData: 'Guard Stick',
      },
      {
        headerId: 'col-class',
        cellData: 'Healer',
      },
    ],
  },
  {
    rowId: 'ff7-3',
    meta: {
      espaceRoleColumn: true,
    },
    cells: [
      {
        headerId: 'col-name',
        cellData: 'Tifa Lockhart',
      },
      {
        headerId: 'col-role',
        cellData: 'Protagonist',
      },
      {
        headerId: 'col-weapon',
        cellData: 'Fists',
      },
      {
        headerId: 'col-class',
        cellData: 'Fighter',
      },
    ],
  },
  {
    rowId: 'ff7-4',
    meta: {
      espaceRoleColumn: true,
    },
    cells: [
      {
        headerId: 'col-name',
        cellData: 'Barret Wallace',
      },
      {
        headerId: 'col-role',
        cellData: 'Protagonist',
      },
      {
        headerId: 'col-weapon',
        cellData: 'Gun-Arm',
      },
      {
        headerId: 'col-class',
        cellData: 'Resistant',
      },
    ],
  },
];
