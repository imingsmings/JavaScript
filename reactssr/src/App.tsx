import { useState, Suspense, lazy } from 'react'

const Todo = lazy(() => import('./Todo.tsx'))

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
      <h1 className='text-lg'>This is React SSR.</h1>
      <button
        className='bg-blue-400 hover:bg-blue-500 text-white p-1 rounded-lg cursor-pointer'
        onClick={() => setCount((count) => count + 1)}
      >
        Count: {count}
      </button>
      <Suspense fallback={<div>Loading ...</div>}>
        <Todo />
      </Suspense>
    </>
  )
}

export default App
