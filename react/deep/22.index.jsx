const { useState } = React;

function App() {
  const [count, setCount] = useState(0);
  const [obj, setObj] = useState({});

  const addCount = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  console.log(count);

  console.log('render');
  return (
    <div className="app">
      <p>{count}</p>
      {/* <button onClick={() => setCount(count + 1)}>Add</button> */}
      <button onClick={addCount}>Add</button>
      <button onClick={() => setObj({})}>Click</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
