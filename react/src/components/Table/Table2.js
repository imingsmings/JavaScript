import { useState } from 'react';

const Table2 = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>Minus</button>
    </div>
  );
};

export default Table2;
