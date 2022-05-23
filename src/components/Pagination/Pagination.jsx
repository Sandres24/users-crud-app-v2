import React from 'react';
import './Pagination.css';

function Pagination({ currentPage, pages, handleChangePage, rangePagination }) {
   return (
      <section className='pagination'>
         {currentPage > 1 && (
            <button
               className='btn btn-pagination btn-prev-page'
               onClick={() => handleChangePage(currentPage - 1)}
            >
               <i className='fa-solid fa-angle-left'></i>
            </button>
         )}
         {rangePagination().map((page) => (
            <button
               key={page}
               className='btn btn-pagination btn-page'
               onClick={() => handleChangePage(page)}
               disabled={currentPage === page}
            >
               {page}
            </button>
         ))}
         {currentPage < pages && (
            <button
               className='btn btn-pagination btn-next-page'
               onClick={() => handleChangePage(currentPage + 1)}
            >
               <i className='fa-solid fa-angle-right'></i>
            </button>
         )}
      </section>
   );
}

export default Pagination;
