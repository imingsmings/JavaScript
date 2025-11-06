import { useState } from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  const [count, setCount] = useState(666)
  const [text, setText] = useState('abc')

  const handleClick = (e: any) => {
    // e.stopPropagation()
    setCount(count + 1)
  }

  const handleClick2 = (e: any) => {
    console.log('div')
  }

  const handleInput = (e: any) => {
    setText(e.target.value)
  }

  return (
    <div onClick={handleClick2}>
      <span onClick={handleClick}>{count}</span>
      <input
        type='text'
        value={text}
        onInput={handleInput}
      >
        123
      </input>
    </div>
  )
}

const element = (
  <div>
    <App />
  </div>
)

createRoot(document.getElementById('root')!).render(element)
