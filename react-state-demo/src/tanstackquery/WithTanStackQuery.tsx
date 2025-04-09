import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

/// fetch API
// const fetchData = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos')
//   if (!response.ok) {
//     throw new Error('Fetching error')
//   }
//   return response.json()
// }

// axios
const fetchData = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
  return response.data
}

function WithTanStackQuery() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['todo'],
    queryFn: fetchData
  })

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error.message}</h1>}
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  )
}

export default WithTanStackQuery
