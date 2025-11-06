import { useState } from 'react'
import { createRoot } from 'react-dom/client'

let startTimout = true

function App() {
  const [count, setCount] = useState(666)
  const [count1, setCount1] = useState(777)
  const [count2, setCount2] = useState(999)

  if (startTimout) {
    startTimout = false
    setTimeout(() => {
      setCount(888)
      setCount1(777 + 1)
    }, 1000)
  }

  return (
    <div>
      <span>{count}</span>
      <span>{count1}</span>
    </div>
  )
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
