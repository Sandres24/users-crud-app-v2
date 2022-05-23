import { useState } from 'react';
import { config } from '../config';

function usePagination({ totalElements, range }) {
   const [page, setPage] = useState(1);

   const pages = Math.ceil(totalElements / config.elementsPerPage);
   const lastIndex = page * config.elementsPerPage;
   const firstIndex = lastIndex - config.elementsPerPage;

   const handleChangePage = (page) => {
      window.scrollTo(0, 0);
      setPage(page);
   };

   const rangePagination = () => {
      const gap = Math.floor(range / 2);
      const middlePage = gap + 1;

      if (pages < range)
         return Array.from(Array(pages).keys(), (index) => index + 1);

      if (page > middlePage && page + gap < pages)
         return Array.from(Array(range).keys(), (index) => page - gap + index);

      if (page > middlePage && page + gap >= pages)
         return Array.from(
            Array(range).keys(),
            (index) => pages - range + 1 + index
         );

      return Array.from(Array(range).keys(), (index) => index + 1);
   };

   return {
      page,
      handleChangePage,
      pages,
      firstIndex,
      lastIndex,
      rangePagination,
   };
}

export default usePagination;
