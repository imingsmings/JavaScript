import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

const fetchTodo = async (id: number) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/' + id)
  return response.json()
}

function RefetchInterval() {
  const [currentId, setCurrentId] = useState(1)
  const { data, error, isLoading } = useQuery({
    queryKey: ['todo', currentId],
    queryFn: () => fetchTodo(currentId),
    refetchInterval: 5000
  })

  useEffect(() => {
    // const timer = setInterval(() => {
    //   setCurrentId((prevId) => (prevId < 200 ? prevId + 1 : 1))
    // }, 5000)
    // return () => {
    //   clearInterval(timer)
    // }
  }, [])

  return (
    <div>
      <p>
        <button onClick={() => setCurrentId((prevId) => (prevId < 200 ? prevId + 1 : 1))}>Next Todo</button>
      </p>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error.message}</h1>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  )
}

export default RefetchInterval
