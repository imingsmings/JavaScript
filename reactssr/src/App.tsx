import { useState, Suspense, lazy } from 'react'

const Todo = lazy(() => import('./Todo.tsx'))

interface Props {
  data?: object
}

function App({ data }: Props) {
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
      {data && JSON.stringify(data)}
      <Suspense fallback={<div>Loading ...</div>}>
        <Todo />
      </Suspense>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://jsonplaceholder.typicode.com/todos/1')
  const data = await res.json()
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return { props: { data } }
}

export default App
