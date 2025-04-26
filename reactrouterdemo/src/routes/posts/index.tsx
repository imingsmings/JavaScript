import { createFileRoute } from '@tanstack/react-router'
import { todoData } from '../../data/todos'

type TodoItem = (typeof todoData)[number]

export const Route = createFileRoute('/posts/')({
  component: PostComponent,
  loader: async () => {
    // throw new Error('Error occurs')
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return todoData
  },
  pendingComponent: () => {
    return <div className='font-bold text-blue-400'>Loading ...</div>
  },
  errorComponent: () => {
    return <div className='font-bold text-red-500'>This is a fallback UI.</div>
  }
})

function PostComponent() {
  const data = Route.useLoaderData()

  return (
    <div>
      <ul className='cursor-pointer'>
        {data.map((todo: TodoItem) => {
          return (
            <li
              className='hover:bg-blue-100'
              key={todo.id}
            >
              {todo.title}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
