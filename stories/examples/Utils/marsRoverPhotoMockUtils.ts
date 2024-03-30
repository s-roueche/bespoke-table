import { Camera, MarsRoverApiResponseProps, MarsRoverHeaderDataProps } from './marsRoversMockUtils';
import { formatDate, toDate } from './dateFormatUtils';
import { TableDataProps, TableHeaderProps } from '../../../src';

export type MarsRoverPhotoApiResponseProps = {
  id: number;
  sol: number;
  img_src: string;
  earth_date: string;
  rover: MarsRoverApiResponseProps;
  camera: Camera;
};

export type MarsRoverPhotoTableDataProps = {
  value: string | number;
  sortValue?: string | number;
};
export const marsRoverPhotoTableHeaders: TableHeaderProps<
  MarsRoverPhotoTableDataProps,
  MarsRoverHeaderDataProps
>[] = [
  {
    id: 'col-id',
    title: 'Id',
    isFirstColumn: true,
    width: '70px',
  },
  {
    id: 'col-sol',
    title: 'Sol',
  },
  {
    id: 'col-earth-date',
    title: 'Earth date',
  },
  {
    id: 'col-rover-name',
    title: 'Rover name',
  },
  {
    id: 'col-cam-name',
    title: 'Camera name',
  },
  {
    id: 'col-img',
    title: 'Image',
    isLastColumn: true,
  },
];

export const buildMarsRoverPhotoTableData = (
  roverPhotos: MarsRoverPhotoApiResponseProps[],
): TableDataProps<MarsRoverPhotoTableDataProps>[] => {
  const result = roverPhotos.map((roverPhoto) => ({
    rowId: roverPhoto.id.toString(),
    cells: [
      {
        headerId: 'col-id',
        cellData: {
          value: roverPhoto.id,
        },
      },
      {
        headerId: 'col-sol',
        cellData: {
          value: roverPhoto.sol,
        },
      },
      {
        headerId: 'col-earth-date',
        cellData: {
          value: formatDate(roverPhoto.earth_date),
          sortValue: toDate(roverPhoto.earth_date).valueOf(),
        },
      },
      {
        headerId: 'col-rover-name',
        cellData: {
          value: roverPhoto.rover.name,
        },
      },
      {
        headerId: 'col-cam-name',
        cellData: {
          value: roverPhoto.camera.name,
        },
      },
      {
        headerId: 'col-img',
        cellData: {
          value: roverPhoto.img_src,
        },
      },
    ],
  }));

  console.log({ result });
  return result;
};
