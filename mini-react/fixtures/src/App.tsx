import { useState, useEffect } from 'react'

async function getData(count: number) {
  const data = await new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(count)
    }, 1000)
  })
  return data
}

function Child() {
  useEffect(() => {
    console.log('Child useEffect')
  }, [])
  return <div>Child</div>
}

function App() {
  const [count, setCount] = useState(666)
  const [list, setList] = useState<number[]>([])
  const [loading, setLoading] = useState(false)

  const handleClick = (e: any) => {
    setCount(count + 1)
  }

  useEffect(() => {
    setLoading(true)
    getData(count)
      .then((value) => {
        setList([...list, value])
      })
      .finally(() => {
        setLoading(false)
      })
  }, [count])

  // useEffect(() => {
  //   console.log('useEffect 2')
  // })

  return (
    <div>
      <Child />
      <button
        onClick={handleClick}
        style={{ color: 'red', fontSize: '20px', backgroundColor: 'skyblue' }}
      >
        {count}
      </button>
      {loading ? (
        <div>Loaidng...</div>
      ) : (
        <ul>
          {list.map((item) => {
            return <li key={item}>{item}</li>
          })}
        </ul>
      )}
    </div>
  )
}

export default App
