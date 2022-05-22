import ReactDOM from 'react-dom';
import React, { useRef } from 'react';
import './Modal.css';

function Modal({ children, visibility, overlayClose, handleCloseModal }) {
   const modalContainerRef = useRef();

   const handleClickOverlay = () => {
      modalContainerRef.current.animate(
         [
            { transform: 'scale(1)' },
            { transform: 'scale(1.015)' },
            { transform: 'scale(1)' },
         ],
         {
            duration: 750,
         }
      );
   };

   return (
      <div
         ref={modalContainerRef}
         className={`modal-container ${
            visibility ? 'modal-open' : 'modal-close'
         }`}
      >
         <div
            className='overlay'
            onClick={overlayClose ? handleCloseModal : handleClickOverlay}
         ></div>

         <div className='modal'>
            <button className='btn btn-close-modal' onClick={handleCloseModal}>
               X
            </button>
            {children}
         </div>
      </div>
   );
}

function ModalPortal({ children, visibility, overlayClose, handleCloseModal }) {
   return ReactDOM.createPortal(
      <Modal
         visibility={visibility}
         overlayClose={overlayClose}
         handleCloseModal={handleCloseModal}
      >
         {children}
      </Modal>,
      document.getElementById('root-modal')
   );
}

export default ModalPortal;
