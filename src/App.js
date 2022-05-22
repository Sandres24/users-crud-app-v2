import React from 'react';
import './App.css';
import { Card, ModalPortal } from './components';
import Button from './components/Button/Button';
import { useModal } from './hooks';

function App() {
   const { isOpen, handleOpenModal, handleCloseModal } = useModal();

   return (
      <div className='App'>
         <h1 className='users-title'>Users</h1>
         <Button
            className='btn btn-user-crud btn-add-user'
            handleClick={handleOpenModal}
            disabled={isOpen}
         >
            <i className='fa-solid fa-plus'></i>Add user
         </Button>
         <ModalPortal
            btnLabel={'Open'}
            visibility={isOpen}
            overlayClose={false}
            handleCloseModal={handleCloseModal}
         >
            <Card />
         </ModalPortal>
      </div>
   );
}

export default App;
