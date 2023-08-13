const { useState, useEffect } = React;

const Foo = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Foo useEffect');

    let timer = setInterval(() => {
      // setCount(count + 1);
      setCount((count) => count + 1);
    }, 5000);

    return () => {
      // 模拟componentWillUnmount
      clearInterval(timer);
      console.log('Foo clear effect');
    };
  }, []);

  useEffect(() => {
    return () => {
      // console.log(count);
      console.log('count clear');
    };
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>ADD</button>
    </div>
  );
};

const App = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div className="App">
      {visible && <Foo />}
      <button onClick={() => setVisible(!visible)}>显示/隐藏</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
