import { useState } from 'react'

function Child(props: any) {
  return <div onClick={() => props.updater()}>{props.a + props.b}</div>
}

function App() {
  const [count, setCount] = useState(666)
  const [count1, setCount1] = useState(888)
  const [list, setList] = useState(['A', 'B'])

  const handleClick = (e: any) => {
    setCount(count + 1)
    setCount1(count1 + 2)
    const newList: string[] = [...list, `${Date.now()}`].reverse()
    setList(newList)
  }

  return (
    <div>
      <span
        onClick={handleClick}
        style={{ color: 'red', fontSize: '20px', backgroundColor: 'skyblue' }}
      >
        {count}
        {count1}
      </span>
      <ul>
        {list.map((item) => {
          return <li key={item}>{item}</li>
        })}
      </ul>
      <div>{count % 2 == 0 ? <span>React</span> : <span>Next.js</span>}</div>
      <Child
        a={count}
        b={count1}
        updater={handleClick}
      />
    </div>
  )
}

export default App
