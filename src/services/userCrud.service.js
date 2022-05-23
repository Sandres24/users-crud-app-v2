import axios from 'axios';
import { config } from '../config';

export const getUsersService = () => {
   const controller = new AbortController();
   const signal = controller.signal;

   return axios
      .get(config.baseUrl, { signal })
      .then((res) => res.data)
      .finally(
         setTimeout(() => {
            controller.abort();
         }, config.abortRequestAfter)
      );
};

export const postUserService = (user) => {
   const controller = new AbortController();
   const signal = controller.signal;

   return axios.post(config.baseUrl, user, { signal }).finally(
      setTimeout(() => {
         controller.abort();
      }, config.abortRequestAfter)
   );
};

export const updateUserService = (userId, updatedUser) => {
   const controller = new AbortController();
   const signal = controller.signal;

   return axios
      .put(config.baseUrl + userId + '/', updatedUser, { signal })
      .finally(
         setTimeout(() => {
            controller.abort();
         }, config.abortRequestAfter)
      );
};

export const deleteUserService = (userId) => {
   const controller = new AbortController();
   const signal = controller.signal;

   return axios.delete(config.baseUrl + userId, { signal }).finally(
      setTimeout(() => {
         controller.abort();
      }, config.abortRequestAfter)
   );
};
