const { useContext, useState } = React;
const BaseContext = React.createContext();

const SubFoo = () => {
  const base = useContext(BaseContext);
  return <div>{base.count}</div>;
};

const Foo = () => {
  const { count, setCount } = useContext(BaseContext);

  return (
    <div>
      <p>{count}</p>
      <p>
        <button onClick={() => setCount(count + 1)}>ADD</button>
      </p>
      <SubFoo />
    </div>
  );
};

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <BaseContext.Provider value={{ count, setCount }}>
      <Foo></Foo>
    </BaseContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
