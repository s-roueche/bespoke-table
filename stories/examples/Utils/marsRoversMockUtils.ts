import { Size, TableDataProps, TableHeaderProps } from '../../../src/type';
import { toDate } from './dateFormatUtils';
import { formatNumber } from './numberUtils';

export interface MarsRoverApiResponseProps {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
  max_sol: number;
  max_date: string;
  total_photos: number;
  cameras: Camera[];
}

export interface Camera {
  name: 'FHAZ' | 'NAVCAM' | 'MAST' | 'CHEMCAM' | 'MAHLI' | 'MARDI' | 'RHAZ';
  full_name: string;
}

export type MarsRoverTableDataProps = {
  value: string | number;
  sortValue?: string | number;
};

export const marsRoverTableHeader: TableHeaderProps<MarsRoverTableDataProps>[] = [
  {
    id: 'col-id',
    title: 'Id',
    isFirstColumn: true,
    width: '50px',
  },
  {
    id: 'col-name',
    title: 'Name',
  },
  {
    id: 'col-launch-date',
    title: 'Launch date',
  },
  {
    id: 'col-landing-date',
    title: 'Landing date',
  },
  {
    id: 'col-status',
    title: 'Status',
  },
  {
    id: 'col-last-activity-date',
    title: 'Last activity',
  },
  {
    id: 'col-photos-count',
    title: 'Photos',
    isLastColumn: true,
  },
];

export const buildMarsRoverTableData = (
  rovers: MarsRoverApiResponseProps[],
  rowHeight?: Size,
  isOddClassName?: boolean,
): TableDataProps<MarsRoverTableDataProps>[] => {
  return rovers.map((rover, index) => ({
    rowId: rover.id.toString(),
    rowHeight,
    className: isOddClassName && index % 2 === 0 ? 'odd' : undefined,
    cells: [
      {
        headerId: 'col-id',
        cellData: {
          value: rover.id,
        },
      },
      {
        headerId: 'col-name',
        cellData: {
          value: rover.name,
        },
      },
      {
        headerId: 'col-launch-date',
        cellData: {
          value: rover.launch_date,
          sortValue: toDate(rover.launch_date).valueOf(),
        },
      },
      {
        headerId: 'col-landing-date',
        cellData: {
          value: rover.landing_date,
          sortValue: toDate(rover.landing_date).valueOf(),
        },
      },
      {
        headerId: 'col-status',
        cellData: {
          value: rover.status,
        },
      },
      {
        headerId: 'col-last-activity-date',
        cellData: {
          value: rover.max_date,
          sortValue: toDate(rover.max_date).valueOf(),
        },
      },
      {
        headerId: 'col-photos-count',
        cellData: {
          value: formatNumber(rover.total_photos),
        },
      },
    ],
  }));
};
