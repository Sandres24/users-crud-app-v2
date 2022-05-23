import React from 'react';
import './UserCard.css';

function UserCard({
   className,
   userInfo,
   handleOpenModal,
   deleteUser,
   handleSelectUser,
   handleDeselectUser,
}) {
   const handleUpdateUser = () => {
      handleSelectUser(userInfo);
      handleOpenModal();
   };

   const handleDeleteUser = () => {
      deleteUser(userInfo.id);
      handleDeselectUser();
   };

   return (
      <div className={`card ${className}`}>
         <div className='card-header'>
            <h2 className='card-header-title'>
               {userInfo.first_name} {userInfo.last_name}
            </h2>
            <hr className='card-hr' />
         </div>
         <div className='card-body'>
            <div className='user-field user-email'>
               <h3 className='user-field-title'>EMAIL</h3>
               <p className='user-field-text'>{userInfo.email}</p>
            </div>
            <div className='user-field user-birthday'>
               <h3 className='user-field-title'>BIRTHDAY</h3>
               <p className='user-field-text'>
                  <i className='fa-solid fa-cake-candles'></i>{' '}
                  {userInfo.birthday}
               </p>
            </div>
         </div>
         <div className='card-footer'>
            <hr className='card-hr' />
            <div className='card-footer buttons-container'>
               <button
                  className='btn btn-card-footer btn-delete-user'
                  onClick={handleDeleteUser}
               >
                  <i className='fa-solid fa-trash'></i>
               </button>
               <button
                  className='btn btn-card-footer btn-update-user'
                  onClick={handleUpdateUser}
               >
                  <i className='fa-solid fa-pen'></i>
               </button>
            </div>
         </div>
      </div>
   );
}

export default UserCard;
