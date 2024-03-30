import React from 'react';
import { PaginationRenderProps } from '../../../../src';

const Pagination = ({
  handleChangeRowsPerPage,
  handlePageSelectChange,
  rowsPerPage,
  currentPage,
  pageCount,
  itemsPerPage,
}: PaginationRenderProps) => {
  return (
    <div className='pagination'>
      <span>Item per page :</span>
      <select
        id={'rowsPerPage'}
        value={rowsPerPage}
        onChange={(event) => handleChangeRowsPerPage(Number(event.target.value))}
        style={{ margin: '0 1rem', border: '1px solid #ccc', padding: '0.5rem' }}
      >
        {itemsPerPage?.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <button disabled={currentPage === 1} onClick={() => handlePageSelectChange(currentPage - 1)}>
        Précédent
      </button>
      <span>
        Page {currentPage} sur {pageCount}
      </span>
      <button
        disabled={currentPage === pageCount}
        onClick={() => handlePageSelectChange(currentPage + 1)}
      >
        Suivant
      </button>
    </div>
  );
};
export default Pagination;
