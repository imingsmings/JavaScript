import { useState } from 'react'

export function Test() {
  const count = 0
  return <p>{count}</p>
}

export function TestState() {
  const [count, setCount] = useState(0)
  return <p>{count}</p>
}

let startTimout = true

export function App2() {
  console.log('Component Render')
  const [count, setCount] = useState(0)
  if (startTimout) {
    startTimout = false
    setTimeout(() => {
      setCount(1)
    }, 1000)
  }

  return <p>{count}</p>
}
