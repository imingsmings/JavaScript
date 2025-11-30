import { useState, useEffect, useRef } from 'react'

async function getData(count: number) {
  const data = await new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(count)
    }, 1000)
  })
  return data
}

function Child() {
  const [text, setText] = useState('a')
  useEffect(() => {
    // console.log('Child useEffect')
    return () => {
      // console.log('Child useEffect Clear')
    }
  }, [text])

  const handleTextChange = () => {
    setText(`${text}-${text}`)
  }

  return <div onClick={handleTextChange}>{text}</div>
}

function App() {
  const [count, setCount] = useState(666)
  const [list, setList] = useState<number[]>([])
  const [loading, setLoading] = useState(false)
  const ref = useRef(null)

  const handleClick = (e: any) => {
    setCount(count + 1)
  }

  // useEffect(() => {
  //   setLoading(true)
  //   getData(count)
  //     .then((value) => {
  //       setList([...list, value])
  //     })
  //     .finally(() => {
  //       setLoading(false)
  //     })
  // }, [count])

  useEffect(() => {
    console.log(ref)
  }, [])

  useEffect(() => {
    // console.log('useEffect 2')
    return () => {
      // console.log('useEffect Clear 2')
    }
  }, [count])

  useEffect(() => {
    // console.log('useEffect 1')
    return () => {
      // console.log('useEffect Clear 1')
    }
  }, [list])

  return (
    <div
      ref={ref}
      id='container'
    >
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
