import { useState } from 'react'

// export function Test() {
//   const count = 0
//   return <p>{count}</p>
// }

export function TestState() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('a')
  return <p>{count}</p>
}

let startTimout = true

export function App2() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('a')
  if (startTimout) {
    startTimout = false
    setTimeout(() => {
      setCount(1)
    }, 1000)
  }

  return <p>{count}</p>
}
