import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from './userActions';

export function ComponentStore() {

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);


    const handleAddUser = () => {

        const newUser = { id: Date.now(), name: `User ${users.length + 1}` };
        dispatch(addUser(newUser));
      };
    
      const handleRemoveUser = (userId) => {
        dispatch(removeUser(userId));
      };

      return (
        <div>
          {/* <h1>Counter: {counter}</h1>
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
          <button onClick={handleReset}>Reset</button> */}
    
          <h2>User List:</h2>
          <button onClick={handleAddUser}>Add User</button>
          <ul>            
          {users?.map((user) => (
          <li key={user.id}>
            {user.name} <button onClick={() => handleRemoveUser(user.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );

}
