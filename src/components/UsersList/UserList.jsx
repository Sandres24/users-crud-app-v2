import React from 'react';
import { useModal, usePagination } from '../../hooks';
import ModalPortal from '../Modal/Modal';
import Pagination from '../Pagination/Pagination';
import UserCard from '../UserCard/UserCard';
import UserForm from '../UserForm/UserForm';
import './UsersList.css';

function UserList({
   users,
   isLoading,
   error,
   selectedUser,
   updateUser,
   deleteUser,
   handleSelectUser,
   handleDeselectUser,
}) {
   const { isOpen, handleOpenModal, handleCloseModal } = useModal();
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
         <ModalPortal
            btnLabel={'Open'}
            visibility={isOpen}
            modalTitle={selectedUser.id ? 'Update user' : 'New user'}
            overlayClose={false}
            handleCloseModal={handleCloseModal}
         >
            <UserForm
               selectedUser={selectedUser}
               updateUser={updateUser}
               handleDeselectUser={handleDeselectUser}
               handleCloseModal={handleCloseModal}
            />
         </ModalPortal>
         <section className='users-list'>
            {users.slice(firstIndex, lastIndex).map((user) => (
               <UserCard
                  key={user.id}
                  className='card-user-crud'
                  userInfo={user}
                  deleteUser={deleteUser}
                  handleOpenModal={handleOpenModal}
                  handleSelectUser={handleSelectUser}
                  handleDeselectUser={handleDeselectUser}
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
