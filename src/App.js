import logo from './logo.svg';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import CounterParent from './Components/counter/counter';
import UseEffectHook from './Components/Hooks/useeffecthook';
import UseContextHook from './Components/Hooks/usecontexthook';
import {UseReducerHookCounter, UseReducerHookList} from './Components/Hooks/usereducerhook';
import UseRefHook from './Components/Hooks/userefhook';
import UseMemoHook from './Components/Hooks/usememohook';
import { ComponentStore } from './Reduxstore/componentStore';
import CascadingDropdown from './Components/CascadingDropdown'
import TableWithButtons from './Components/TableWithButtons';
import UseCallbackHook from './Components/Hooks/usecallbackhook';
import UserContainer from './Components/UserList/UserContainer';
import Dashboard from './Components/HOC/Dashboard';
import Profile from './Components/HOC/Profile';
import withAuth from './Components/HOC/AuthHOC';

// Lazy load the Button component from the remote app--micro frontend
//const Button =  import('remoteApp/Button');



function App() {
  const AuthenticatedDashboard = withAuth(Dashboard); //for HOC
  const AuthenticatedProfile = withAuth(Profile); // for HOC


  const [status, setStatus] = useState('Initial State');
  const changeState = () => {
    setStatus("Button Clicked"); // Update the state by incrementing count
  };


  function Child({ message }) {
    return ( 
    <div>
    <p>This is child</p>
    <p>Message from parent: {message}</p>
    </div>
    );
  }

  
  function Parent() {
    const message = "Hello from Parent! haha";
    return (
      <div>
    <p>This is parent</p>
    <Child message={message} />
    </div>
    ) 
  };

// Sibling 1 (Child1)
  function Child1({ setSharedData }) {
    const handleChange = () => {
      setSharedData("Data updated from Child 1-bla");
    };
  
    return <button onClick={handleChange}>Update Data from Child 1</button>;
  }
  
  // Sibling 2 (Child2)
  function Child2({ sharedData }) {
    return <p>Shared Data: {sharedData}</p>;
  }

  function ParentNew() {
    const [sharedData, setSharedData] = useState("Initial Data");
  
    return (
      <div>
        <Child1 setSharedData={setSharedData} />
        <Child2 sharedData={sharedData} />
      </div>
    );
  }
 

  return (
    <div className="App">
      <h2> React Tutorial</h2>
      
      <header className="App-header">

      * use State
      <button onClick={changeState}>Change state</button>
      <p>Current state: {status}</p>
      <div className='contents'>

      * Parent to Child --------------------------------------------------------
    <Parent/>
    * Child to Parent (Lifting state up) --------------------------------------------------------
    <ParentNew/>

    * Counter -----------------------------------------------------
    <CounterParent />

    * Hooks ------------------------------------------------------------
    <UseEffectHook/>
    
    <div>-------------------------------------</div>
    <UseContextHook/>
    <div>-------------------------------------</div>
    <UseReducerHookCounter/>
    <div>-------------------------------------</div>
    <UseReducerHookList/>
    <div>-------------------------------------</div>
    <UseRefHook/>
    <div>-------------------------------------</div>
    <UseMemoHook/>
  
      </div>
      <div>-------------------------------------</div>
      
    <ComponentStore/>

    <div>-------------------------------------</div>
    <CascadingDropdown />

    <TableWithButtons />
    <div>-------------------------------------</div>
    <UseCallbackHook />

    <UserContainer />
     


    <Router>
        <Routes>
          <Route path="/dashboard" element={<AuthenticatedDashboard />} />
          <Route path="/profile" element={<AuthenticatedProfile />} />
          <Route
            path="/"
            element={
              <div>
                <h1>Higher Order Component</h1>
                <div>Login page for unauthenticated users</div>
              </div>
            }
          />
        </Routes>
      </Router>
    


    

        
      </header>
     
    </div>
  );
}

export default App;
