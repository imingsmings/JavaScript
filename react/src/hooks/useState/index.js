import React, { useState } from 'react';

const State = () => {
  // const [count, setCount] = useState(0);
  const [count, setCount] = useState();

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
};

export default State;
