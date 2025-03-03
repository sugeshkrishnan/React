import React, { useState,useCallback } from 'react';

const Child = React.memo(({ onClick }) => {
    console.log('Child rendered');
    return <button onClick={onClick}>Click me</button>;
  });

function UseCallbackHook() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  console.log('Parent rendered');
  return (
    <div>
      <p>Count: {count}</p>
      {/* Without useCallback, the handleClick function is recreated every render */}
      <Child onClick={handleClick} />
    </div>
  );
}

export default UseCallbackHook;