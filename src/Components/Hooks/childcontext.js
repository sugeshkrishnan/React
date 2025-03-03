import React, { useState, useContext } from 'react';
import { MyContext } from './usecontexthook';


export default function ChildContext() {
  const { message, setMessage } = useContext(MyContext);  // Access context
  
    return <p>Message from child context: {message}</p>;
  }