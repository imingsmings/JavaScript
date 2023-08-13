const { useState, useCallback, memo, useMemo } = React;

// const Foo = (props) => {
//   console.log('Foo render');
//   return <ul>{props.render()}</ul>;
// };

const Foo = memo((props) => {
  console.log('Foo render');
  // return <ul>{props.render()}</ul>;
  return (
    <div>
      {props.counts}
      <ul>{props.render}</ul>
    </div>
  );
});

const App = () => {
  const [count, setCount] = useState(0);
  const [range, setRange] = useState({ min: 0, max: 10000 });

  // const render = () => {
  //   const list = [];
  //   for (let i = range.min; i < range.max; i++) {
  //     list.push(<li key={i}>{i}</li>);
  //   }
  //   console.log('run');
  //   return list;
  // };

  // const render = useCallback(() => {
  //   const list = [];
  //   for (let i = range.min; i < range.max; i++) {
  //     list.push(<li key={i}>{i}</li>);
  //   }
  //   console.log('run');
  //   return list;
  // }, [range]);

  const render = useMemo(() => {
    const list = [];
    for (let i = range.min; i < range.max; i++) {
      list.push(<li key={i}>{i}</li>);
    }
    return list;
  }, [range]);

  const counts = useMemo(() => {
    return count * 2;
  }, [count]);

  // console.log(render);

  return (
    <div>
      <p>{count}</p>
      <p>
        <button onClick={() => setCount(count + 1)}>ADD</button>
        <button onClick={() => setRange({ ...range, max: range.max + 1 })}>
          Change Range
        </button>
      </p>
      <Foo render={render} counts={counts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
