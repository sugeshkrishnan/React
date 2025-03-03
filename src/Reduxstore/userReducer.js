// src/reducers/userReducer.js

const initialState = { users: [] };

function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, users: [...state.users, action.payload] };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
}

export default userReducer;
