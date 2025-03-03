import { useState } from 'react';
import './counter.css';

export default function CounterParent() {
    
  const counter = <Counter />;
  return (
    <div>
        <p>Preserving and Resetting State
State is isolated between components. React keeps track of which state belongs to which component based on their place in the UI tree. You can control when to preserve state and when to reset it between re-renders.In React, each component on the screen has fully isolated state. For example, if you render two Counter components side by side, each of them will get its own, independent, score and hover states.</p>
      {counter}
      {counter}
    </div>
    
  );
}

function Counter() {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}