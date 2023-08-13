const { useState, useEffect } = React;

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  });

  return (
    <div className="app">
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
