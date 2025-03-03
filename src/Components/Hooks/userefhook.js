import React, { useState, useRef, useEffect } from 'react';

const UseRefHook = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(); // Create a ref to store previous count value
  const inputRef = useRef();

  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(); // Store the interval ID

  useEffect(() => {
    prevCountRef.current = count; // Update previous count on each render
  }, [count]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current); // Cleanup interval on unmount
    };
  }, []);

  return (
    <div>
      <h2>useRef</h2>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCountRef.current}</p>
      { <button onClick={() => setCount(count + 1)}>Increment</button> /* example 1 */}
      {<input ref={inputRef} type="text" />/* example 2 */}
      {<p>Time: {seconds}s</p>/* example 3 */}
    </div>
  );
};

export default UseRefHook;
