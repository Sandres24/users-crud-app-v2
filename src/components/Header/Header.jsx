import React from 'react';
import { useModal } from '../../hooks';
import ModalPortal from '../Modal/Modal';
import './Header.css';

function Header({ selectedUser }) {
   const { isOpen, handleOpenModal, handleCloseModal } = useModal();

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
            modalTitle={selectedUser.id ? 'Update user' : 'New User'}
            overlayClose={false}
            handleCloseModal={handleCloseModal}
         ></ModalPortal>
      </section>
   );
}

export default Header;
