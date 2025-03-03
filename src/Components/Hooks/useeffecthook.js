import React, { useState, useEffect } from 'react';

export default function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  useEffect(() => {
    console.log("aaa");
    const fetchData = async () => {

      try {
        console.log("bbb");
        const resp = await fetch('https://jsonplaceholder.typicode.com/todos/')
        const data = await resp.json();

        const userIds = data.map(user => user.userId);
        const uniqueUserIds = [...new Set(userIds)];
        setUsers(uniqueUserIds);
        console.log(uniqueUserIds);
        
      } catch (error) {
        
      }
    }

    fetchData(); 


  },[count])


  return (
    <>
    <h3>useEffect</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
      <ul>
        {users.map(user => (
          
          <li key={user.id}>{user}</li>
        ))}
      </ul>
    </>
  );
}

