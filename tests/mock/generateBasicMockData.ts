import { v4 as uuidv4 } from 'uuid';

const headers = [
  { id: 'col-name', name: 'Name' },
  { id: 'col-role', name: 'Role' },
  { id: 'col-weapon', name: 'Weapon' },
  { id: 'col-class', name: 'Class' },
];
export const generateBasicMockData = (length: number) => {
  const data = [];

  for (let i = 0; i < length; i++) {
    const cells = headers.map((header) => ({
      headerId: header.id,
      cellData: `Data for ${header.name} ${i}`,
    }));

    const row = {
      rowId: uuidv4(),
      cells: cells,
    };

    data.push(row);
  }

  return data;
};
