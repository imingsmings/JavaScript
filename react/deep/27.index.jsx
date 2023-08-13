const { useState, useEffect } = React;

// 自定义hook
const useCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return [count, setCount];
};

const App = () => {
  const [count, setCount] = useCount();

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>ADD</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
