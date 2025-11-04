import { createRoot } from 'react-dom/client'

function App() {
  return <div>789</div>
}

const element = (
  <div id='container'>
    <h1>123</h1>
    <h2>
      <span>456</span>
    </h2>
    <App />
  </div>
)

createRoot(document.getElementById('root')!).render(element)
