import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

const fetchTodos = async (page = 1, limit = 10) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`)
  return response.json()
}

function Pagination() {
  const [page, setPage] = useState(1)
  const pageSize = 10

  const { data, error, isLoading } = useQuery({
    queryKey: ['todos', page],
    queryFn: () => {
      return fetchTodos(page, pageSize)
    }
  })

  if (isLoading) {
    return <h1>Loading ....</h1>
  }

  if (error) {
    return <h1>Error: {error.message}</h1>
  }

  return (
    <div>
      <div>
        <button
          className='border'
          onClick={() => setPage((page) => page + 1)}
        >
          Next Page
        </button>
      </div>
      <h1>Todos</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default Pagination
