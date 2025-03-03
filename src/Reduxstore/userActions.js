// src/actions/userActions.js

export const addUser = (user) => ({
    type: 'ADD_USER',
    payload: user,
  });
  
  export const removeUser = (userId) => ({
    type: 'REMOVE_USER',
    payload: userId,
  });
  