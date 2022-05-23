import ReactDOM from 'react-dom';
import React, { useRef } from 'react';
import './Modal.css';

function Modal({
   children,
   visibility,
   modalTitle,
   overlayClose,
   handleCloseModal,
}) {
   const modalRef = useRef();

   const handleClickOverlay = () => {
      modalRef.current.animate(
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
         className={`modal-container ${
            visibility ? 'modal-open' : 'modal-close'
         }`}
      >
         <div
            className='overlay'
            onClick={overlayClose ? handleCloseModal : handleClickOverlay}
         ></div>
         <div ref={modalRef} className='modal'>
            {modalTitle && (
               <div className='modal-header'>
                  <h2 className='modal-header-title'>{modalTitle}</h2>
               </div>
            )}
            <button className='btn btn-close-modal' onClick={handleCloseModal}>
               <i className='fa-solid fa-xmark'></i>
            </button>
            <div className='modal-body'>{children}</div>
         </div>
      </div>
   );
}

function ModalPortal({
   children,
   visibility,
   modalTitle,
   overlayClose,
   handleCloseModal,
}) {
   return ReactDOM.createPortal(
      <Modal
         visibility={visibility}
         modalTitle={modalTitle}
         overlayClose={overlayClose}
         handleCloseModal={handleCloseModal}
      >
         {children}
      </Modal>,
      document.getElementById('root-modal')
   );
}

export default ModalPortal;
