import { createRoot } from 'react-dom/client'

const element = (
  <div id='container'>
    <h1>1234</h1>
    <h2>
      <span>456</span>
    </h2>
  </div>
)

createRoot(document.getElementById('root')!).render(element)
