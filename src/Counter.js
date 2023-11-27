// src/Counter.js
import React from 'react';
import { useCounter } from './hooks/useCounter';

const Counter = () => {
  const { count, incrementCounter, decrementCounter } = useCounter();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
};

export default Counter;
