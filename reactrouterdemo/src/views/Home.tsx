import { MouseEvent, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router'
import { todoData } from '../data/todos'

// `https://jsonplaceholder.typicode.com/todos/${id}`

interface Todo {
  id: number
  title: string
  completed: boolean
  userId: number
}

function Home() {
  const [todos, setTodos] = useState<Todo[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    ;(async () => {
      const data = await getTodos()
      setTodos(data)
    })()
  }, [])

  const onClick = (e: MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLElement
    const id = target.dataset.key

    if (!id) return

    navigate(`/todo/${id}`)

    // const todo = todoData.find((todo) => todo.id === Number(id))
    // navigate('/todo', { state: todo })
    // console.log(todo)
  }

  return (
    <div>
      <NavLink to={'/about'}>About</NavLink>
      <ul onClick={onClick}>
        {todos.map((todo) => {
          return (
            <li
              data-key={todo.id}
              key={todo.id}
              className='text-1xl hover:bg-amber-500 hover:cursor-pointer py-1 px-1'
            >
              {todo.title}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Home

async function getTodos(): Promise<Todo[]> {
  // const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
  // const json = await res.json()
  return todoData
}
