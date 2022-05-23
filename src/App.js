import React from 'react';
import './App.css';
import { Header, UserList } from './components';
import { useUserCrud } from './hooks';

function App() {
   const {
      users,
      isLoading,
      error,
      selectedUser,
      postUser,
      updateUser,
      deleteUser,
      handleSelectUser,
      handleDeselectUser,
   } = useUserCrud();

   return (
      <div className='App'>
         <Header
            selectedUser={selectedUser}
            postUser={postUser}
            handleDeselectUser={handleDeselectUser}
         />
         <UserList
            users={users}
            isLoading={isLoading}
            error={error}
            selectedUser={selectedUser}
            updateUser={updateUser}
            deleteUser={deleteUser}
            handleSelectUser={handleSelectUser}
            handleDeselectUser={handleDeselectUser}
         />
      </div>
   );
}

export default App;
