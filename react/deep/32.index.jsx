const { useLayoutEffect, useRef, useEffect, useState } = React;

const App = () => {
  const ref = useRef(null);
  const [obj, setObj] = useState({});

  useEffect(() => {
    console.log('useEffect');
    return () => {
      console.log('useEffect return');
    };
  });

  useLayoutEffect(() => {
    // setTimeout(() => {
    //   ref.current.style.transform = 'translate(300px)';
    //   ref.current.style.transition = 'transform 1s';
    // }, 2000);
    console.log('useLayoutEffect');
    ref.current.style.transform = 'translate(300px)';
    ref.current.style.transition = 'transform 1s';

    return () => {
      console.log('useLayoutEffect return');
      ref.current.style.transform = 'translate(0px)';
      ref.current.style.transition = 'transform 1s';
    };
  });

  const styles = {
    width: '100px',
    height: '100px',
    backgroundColor: 'orange',
  };
  return (
    <div>
      <div style={styles} ref={ref}></div>
      <button onClick={() => setObj({})}>Fresh</button>
    </div>
  );
};

const AppPro = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      {visible && <App />}
      <p>
        <button onClick={() => setVisible(!visible)}>显示隐藏</button>
      </p>
    </div>
  );
};

ReactDOM.render(<AppPro />, document.getElementById('root'));
