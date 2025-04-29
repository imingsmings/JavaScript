import { useState } from 'react'

function App() {
  const [count, setCount] = useState(1)

  return (
    <div>
      <h1 className='text-lg'>This is React SSR.</h1>
      <button
        className='bg-blue-400 hover:bg-blue-500 text-white p-1 rounded-lg cursor-pointer'
        onClick={() => setCount((count) => count + 1)}
      >
        Count: {count}
      </button>
    </div>
  )
}

export default App
