import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return <div>React World</div>;
}

const ele = document.querySelector('#root');
const root = ReactDOM.createRoot(ele);
root.render(<App />);
