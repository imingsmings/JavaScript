import { useState } from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  const [count, setCount] = useState(666)
  const [count1, setCount1] = useState(888)
  // const [text, setText] = useState('abc')

  const handleClick = (e: any) => {
    // e.stopPropagation()
    setCount(count + 1)
    setCount1(count1 + 2)
  }

  // const handleClick2 = (e: any) => {
  //   console.log('div')
  // }

  // const handleInput = (e: any) => {
  //   setText(e.target.value)
  // }

  return (
    <span
      onClick={handleClick}
      style={{ color: 'red', fontSize: '20px', backgroundColor: 'skyblue' }}
    >
      {count}
      {count1}
    </span>
  )
}

const element = (
  <div id='container'>
    <App />
  </div>
)

createRoot(document.getElementById('root')!).render(<App />)
