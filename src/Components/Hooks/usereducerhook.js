import React, { useReducer } from 'react';

const initialState = { count: 0 };

const initialTodos = [
    {
      id: 1,
      title: "Todo 1",
      complete: false,
    },
    {
      id: 2,
      title: "Todo 2",
      complete: false,
    },
  ];

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function reducerTodo(todos, action) {
    switch (action.type) {
      case 'add':
        const nextId = todos.length ? todos[todos.length - 1].id + 1 : 1;
        return [...todos, { title: 'Todo '+ nextId, id: todos.length + 1 }];
      case 'delete':
        return todos.slice(0, -1); // Remove last item
      default:
        return todos;
    }
  }

export function UseReducerHookCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
        <h2>UseReducer example 1</h2>
      <p>Count: {state.count}</p>
      
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      
    </div>
  );
}

export function UseReducerHookList() {
    const [todos, dispatch] = useReducer(reducerTodo, initialTodos);
  
    return (
      <>
        <h2>UseReducer example 2</h2>
        {

            todos.map((todo => {
                        
               return <p key={todo.id}>{todo.title}</p>
            }))
        }
        
        <div>-------------------------------------</div>
        <button onClick={() => dispatch({ type: 'add' })}>Add</button>
        <button onClick={() => dispatch({ type: 'delete' })}>Delete</button>
      </>
    );
  }


