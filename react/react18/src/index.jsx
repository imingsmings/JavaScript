import ReactDOM from 'react-dom/client';

import App from './App';

import './assets/index.css'

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<App />);
