const { useRef, forwardRef, useState, useImperativeHandle } = React;

const Foo = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      focus: () => {
        inputRef.current.focus();
      },
    };
  });

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
});

const App = () => {
  const inputRef = useRef();

  function handleClick() {
    inputRef.current.focus();
    // inputRef.current.remove();
  }

  return (
    <div>
      {/* <input type="text" ref={inputRef} /> */}
      <Foo ref={inputRef} />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
