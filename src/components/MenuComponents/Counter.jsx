import React, { useState } from 'react';
import './App.css';

function Counter() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter-container">
      <button className="counter-button" onClick={handleDecrement}>-</button>
      <span className="counter-value">{count}</span>
      <button className="counter-button" onClick={handleIncrement}>+</button>
    </div>
  );
}

export default Counter;
