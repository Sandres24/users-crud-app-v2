import React from 'react';
import './App.css';
import { Header, UserList } from './components';
import { useUserCrud } from './hooks';

function App() {
   const { users, isLoading, error, selectedUser } = useUserCrud();

   return (
      <div className='App'>
         <Header selectedUser={selectedUser} />
         <UserList users={users} isLoading={isLoading} error={error} />
      </div>
   );
}

export default App;
