import { Size, TableDataProps, TableHeaderProps } from '../../src/type';
import { toDate } from '../../stories/examples/Utils/dateFormatUtils';
import { formatNumber } from '../../stories/examples/Utils/numberUtils';
import { MarsRoverApiResponseProps } from '../../stories/examples/Utils/marsRoversMockUtils';
export interface MarsRoverDataTestProps {
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
  name: CameraName;
  full_name: string;
}

type CameraName = 'FHAZ' | 'NAVCAM' | 'EDL_RUCAM' | 'EDL_DDCAM' | 'EDL_PUCAM1' | 'EDL_PUCAM2';

export type MarsRoverTableDataTestProps = {
  value: string | number;
  sortValue?: string | number;
};

export const marsRoverTableHeaderTestMock: TableHeaderProps<MarsRoverTableDataTestProps>[] = [
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
    id: 'col-status',
    title: 'Status',
  },
  {
    id: 'col-photos-count',
    title: 'Photos',
    isLastColumn: true,
  },
];

export const roversDataTestMock: MarsRoverDataTestProps[] = [
  {
    id: 5,
    name: 'Curiosity',
    landing_date: '2012-08-06',
    launch_date: '2011-11-26',
    status: 'active',
    max_sol: 3996,
    max_date: '2023-11-02',
    total_photos: 685463,
    cameras: [
      {
        name: 'FHAZ',
        full_name: 'Front Hazard Avoidance Camera',
      },
      {
        name: 'NAVCAM',
        full_name: 'Navigation Camera',
      },
    ],
  },
  {
    id: 7,
    name: 'Spirit',
    landing_date: '2004-01-04',
    launch_date: '2003-06-10',
    status: 'complete',
    max_sol: 2208,
    max_date: '2010-03-21',
    total_photos: 124550,
    cameras: [
      {
        name: 'FHAZ',
        full_name: 'Front Hazard Avoidance Camera',
      },
      {
        name: 'NAVCAM',
        full_name: 'Navigation Camera',
      },
    ],
  },
  {
    id: 6,
    name: 'Opportunity',
    landing_date: '2004-01-25',
    launch_date: '2003-07-07',
    status: 'complete',
    max_sol: 5111,
    max_date: '2018-06-11',
    total_photos: 198439,
    cameras: [
      {
        name: 'FHAZ',
        full_name: 'Front Hazard Avoidance Camera',
      },
      {
        name: 'NAVCAM',
        full_name: 'Navigation Camera',
      },
    ],
  },
  {
    id: 8,
    name: 'Perseverance',
    landing_date: '2021-02-18',
    launch_date: '2020-07-30',
    status: 'active',
    max_sol: 961,
    max_date: '2023-11-02',
    total_photos: 187992,
    cameras: [
      {
        name: 'EDL_RUCAM',
        full_name: 'Rover Up-Look Camera',
      },
      {
        name: 'EDL_DDCAM',
        full_name: 'Descent Stage Down-Look Camera',
      },
      {
        name: 'EDL_PUCAM1',
        full_name: 'Parachute Up-Look Camera A',
      },
      {
        name: 'EDL_PUCAM2',
        full_name: 'Parachute Up-Look Camera B',
      },
    ],
  },
];

export const buildMarsRoverTableDataTest = (
  rovers: MarsRoverApiResponseProps[],
  rowHeight?: Size,
  isOddClassName?: boolean,
): TableDataProps<MarsRoverTableDataTestProps>[] => {
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
        headerId: 'col-status',
        cellData: {
          value: rover.status,
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
