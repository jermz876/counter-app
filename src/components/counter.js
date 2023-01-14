import React, { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0);

  return (
    <div>
        <h1>Counter App</h1>
        <div className="container">
            <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)} disabled = {count===0}>Decrease</button>
        <button onClick={() => setCount(0)} disabled = {count===0}>Reset</button>
        </div>
    </div>
  );
}

export default Counter