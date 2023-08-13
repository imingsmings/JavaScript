const { useState, useEffect, useReducer } = React;

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return { count: state.count + 1 };
    case 'MINUS':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

// const useReducer = (reducer, initialCount) => {
//   const [count, setCount] = useState(initialCount);

//   const dispatch = (action) => {
//     let newCount = reducer(count, action);
//     setCount(newCount);
//   };

//   return [count, dispatch];
// };

const App = () => {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'ADD' })}>ADD</button>
      <button onClick={() => dispatch({ type: 'MINUS' })}>MINUS</button>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
