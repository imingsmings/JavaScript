import { useEffect, useState } from 'react'

function WithoutTanStackQuery() {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  const [id, setId] = useState(1)

  useEffect(() => {
    const handleFetch = async () => {
      setLoading(true)
      setData(null)

      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        if (!res.ok) {
          throw new Error(res.statusText)
        }

        const result = await res.json()
        setData(result)
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message)
        }
      } finally {
        setLoading(false)
      }
    }

    handleFetch()
  }, [id])

  return (
    <div>
      <p>
        <button onClick={() => setId((prevId) => prevId + 1)}>Change</button>
      </p>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {data && <h1>{JSON.stringify(data)}</h1>}
    </div>
  )
}

export default WithoutTanStackQuery
