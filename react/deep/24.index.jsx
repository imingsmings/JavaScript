const { useState, useEffect } = React;

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;

    let timer = setInterval(() => {
      setCount(count + 1);
    }, 10000);

    console.log('useEffect');

    return () => {
      // 上一次的count, 清理上一次的
      clearInterval(timer);
      timer = null;
      console.log('clear effect');
    };
  });

  console.log('render');

  return (
    <div className="app">
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
