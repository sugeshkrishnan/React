import React, { useState, useContext } from 'react';
import ChildContext from './childcontext';


// Create contexts
export const MyContext = React.createContext();

function UseContextHook() {
  const [message, setMessage] = useState("Hello from Parent");

  return (
    <>
      <h3>useContext Example</h3>
      
      {/* Provide context value */}
      <MyContext.Provider value={{ message, setMessage }}>
        <Child />
        
        <button onClick={() => setMessage("Changed Context value")}>
          Change context value (from Parent)
        </button>
        <p>Message from context: {message}</p>
        <ChildContext />
      </MyContext.Provider>
    </>
  );
}

function Child() {
  const { message, setMessage } = useContext(MyContext);  // Access context

  const updateMessage = () => {
    setMessage("Context changed from child");
  };

  return (
    <>
      <button onClick={updateMessage}>Change context value (from Child)</button>
      <p>Message from child: {message}</p>
    </>
  );
}

export default UseContextHook;
