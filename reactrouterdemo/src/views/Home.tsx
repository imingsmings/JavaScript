import { MouseEvent, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router'

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

    // navigate(`/todo/${id}`)

    const todo = todos.find((todo) => todo.id === Number(id))
    navigate('/todo', { state: todo })
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
  return [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false
    },
    {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false
    },
    {
      userId: 1,
      id: 3,
      title: 'fugiat veniam minus',
      completed: false
    },
    {
      userId: 1,
      id: 4,
      title: 'et porro tempora',
      completed: true
    },
    {
      userId: 1,
      id: 5,
      title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
      completed: false
    },
    {
      userId: 1,
      id: 6,
      title: 'qui ullam ratione quibusdam voluptatem quia omnis',
      completed: false
    },
    {
      userId: 1,
      id: 7,
      title: 'illo expedita consequatur quia in',
      completed: false
    },
    {
      userId: 1,
      id: 8,
      title: 'quo adipisci enim quam ut ab',
      completed: true
    },
    {
      userId: 1,
      id: 9,
      title: 'molestiae perspiciatis ipsa',
      completed: false
    },
    {
      userId: 1,
      id: 10,
      title: 'illo est ratione doloremque quia maiores aut',
      completed: true
    }
  ]
}
