import React from 'react';
import { useModal } from '../../hooks';
import ModalPortal from '../Modal/Modal';
import UserForm from '../UserForm/UserForm';
import './Header.css';

function Header({ postUser }) {
   const { isOpen, handleOpenModal, handleCloseModal, handleDeselectUser } =
      useModal();

   return (
      <section className='app-header'>
         <h1 className='users-title'>Users</h1>
         <button
            className='btn btn-user-crud btn-add-user'
            onClick={handleOpenModal}
            disabled={isOpen}
         >
            <i className='fa-solid fa-plus'></i>&ensp;Add user
         </button>
         <ModalPortal
            btnLabel={'Open'}
            visibility={isOpen}
            modalTitle='New user'
            overlayClose={false}
            handleCloseModal={handleCloseModal}
         >
            <UserForm
               selectedUser={{}}
               postUser={postUser}
               handleCloseModal={handleCloseModal}
               handleDeselectUser={handleDeselectUser}
            />
         </ModalPortal>
      </section>
   );
}

export default Header;
