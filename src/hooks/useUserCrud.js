import { useEffect, useState } from 'react';
import {
   deleteUserService,
   getUsersService,
   postUserService,
   updateUserService,
} from '../services';

function useUserCrud() {
   const [users, setUsers] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(false);
   const [selectedUser, setSelectedUser] = useState({});

   useEffect(() => {
      setIsLoading(true);
      getUsersService()
         .then((data) => {
            setUsers(data);
            setError(false);
         })
         .catch((error) => {
            console.error(error);
            setError(true);
         })
         .finally(() => setIsLoading(false));
   }, []);

   const getUsers = () => {
      setIsLoading(true);
      getUsersService()
         .then((data) => {
            setUsers(data);
            setError(false);
         })
         .catch((error) => {
            console.error(error);
            setError(true);
         })
         .finally(() => setIsLoading(false));
   };

   const postUser = (user) => postUserService(user).then(() => getUsers());

   const updateUser = (userId, updatedUser) =>
      updateUserService(userId, updateUser).then(() => getUsers());

   const deleteUser = (userId) =>
      deleteUserService(userId).then(() => getUsers());

   const handleSelectUser = (user) => setSelectedUser(user);

   const handleDeselectUser = () => setSelectedUser({});

   return {
      users,
      isLoading,
      error,
      selectedUser,
      postUser,
      updateUser,
      deleteUser,
      handleSelectUser,
      handleDeselectUser,
   };
}

export default useUserCrud;
