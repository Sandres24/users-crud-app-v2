import React from 'react';
import { usePagination } from '../../hooks';
import Pagination from '../Pagination/Pagination';
import UserCard from '../UserCard/UserCard';
import './UsersList.css';

function UserList({ users, isLoading, error }) {
   const {
      page,
      handleChangePage,
      pages,
      firstIndex,
      lastIndex,
      rangePagination,
   } = usePagination({ totalElements: users.length, range: 7 });

   if (isLoading)
      return <section className='users-list loading'>Loading...</section>;

   if (error) return <section className='users-list error'>Error...</section>;

   return (
      <>
         <section className='users-list'>
            {users.slice(firstIndex, lastIndex).map((user) => (
               <UserCard
                  key={user.id}
                  className='card-user-crud'
                  userInfo={user}
               />
            ))}
         </section>
         {users.length > 0 && (
            <Pagination
               currentPage={page}
               pages={pages}
               handleChangePage={handleChangePage}
               rangePagination={rangePagination}
            />
         )}
      </>
   );
}

export default UserList;
