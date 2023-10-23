import React from 'react';
import { Order } from '../../../../../src/type';

const ArrowDownIcon = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
    <path
      fill='#000000'
      d='M12 16.25a.74.74 0 0 1-.53-.22l-7-7A.75.75 0 0 1 5 7.75h14A.75.75 0 0 1 19.53 9l-7 7a.74.74 0 0 1-.53.25Zm-5.19-7L12 14.44l5.19-5.19Z'
    />
  </svg>
);

const ArrowUpIcon = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
    <path
      fill='#000000'
      d='M19 16.25H5a.74.74 0 0 1-.69-.46a.75.75 0 0 1 .16-.79l7-7a.75.75 0 0 1 1.06 0l7 7a.75.75 0 0 1 .16.82a.74.74 0 0 1-.69.43Zm-12.19-1.5h10.38L12 9.56Z'
    />
  </svg>
);

const UnfoldIcon = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
    <path
      fill='#000000'
      d='M18 10.75H6a.74.74 0 0 1-.69-.46a.75.75 0 0 1 .16-.82l6-6a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 .16.82a.74.74 0 0 1-.69.46ZM7.81 9.25h8.38L12 5.06ZM12 20.75a.74.74 0 0 1-.53-.22l-6-6a.75.75 0 0 1-.16-.82a.74.74 0 0 1 .69-.46h12a.74.74 0 0 1 .69.46a.75.75 0 0 1-.16.82l-6 6a.74.74 0 0 1-.53.22Zm-4.19-6L12 18.94l4.19-4.19Z'
    />
  </svg>
);

export function SortSwitch({
  onClick,
  isColumnSortActive,
  orderDirection,
}: {
  onClick: () => void;
  isColumnSortActive: boolean;
  orderDirection: Order;
}) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '8px',
        cursor: 'pointer',
      }}
    >
      {!isColumnSortActive && <UnfoldIcon />}
      {isColumnSortActive && orderDirection === 'asc' && <ArrowUpIcon />}
      {isColumnSortActive && orderDirection === 'desc' && <ArrowDownIcon />}
    </div>
  );
}
