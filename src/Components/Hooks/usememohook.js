import React, { useState, useMemo, useEffect } from 'react';

const UseMemoHook = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);

  // useMemo to memoize the result of an expensive calculation
  const memoizedCalculation = useMemo(() => {
    console.log('Expensive calculation...');
    return num * num;  // A heavy computation
  }, [num]); // Recalculate only when `num` changes

  // useEffect to handle a side effect (e.g., logging)
  useEffect(() => {
    console.log('Component rendered');
  }, [count]); // Log every time `count` changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <p>Squared Value: {memoizedCalculation}</p>
      <input 
        type="number" 
        value={num} 
        onChange={(e) => setNum(Number(e.target.value))} 
      />
    </div>
  );
};

export default UseMemoHook;
