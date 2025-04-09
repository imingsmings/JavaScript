import { useQuery } from '@tanstack/react-query'
const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  if (!response.ok) {
    throw new Error('Fetch error')
  }
  return response.json()
}

function StaleTime() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['todo'],
    queryFn: fetchData,
    staleTime: 5000
  })
  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error.message}</h1>}
      {data && <h1>{JSON.stringify(data, null, 2)}</h1>}
    </div>
  )
}

export default StaleTime
