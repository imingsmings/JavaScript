import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { todoData } from '../../data/todos'
import { SyntheticEvent } from 'react'

type TodoItem = (typeof todoData)[number]

export const Route = createFileRoute('/posts/')({
  component: PostComponent,
  pendingComponent: () => {
    return <div className='font-bold text-blue-400'>Loading ...</div>
  },
  errorComponent: () => {
    return <div className='font-bold text-red-500'>This is a fallback UI.</div>
  },
  validateSearch: (search) => {
    return {
      postId: search.postId || null,
      timestamp: Date.now()
    }
  },
  loaderDeps: ({ search }) => {
    return {
      id: search.postId
    }
  },
  loader: async () => {
    // throw new Error('Error occurs')
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return todoData
  }
})

function PostComponent() {
  const data = Route.useLoaderData()
  const navigate = useNavigate()

  const onClick = (e: SyntheticEvent<HTMLUListElement>) => {
    const target = e.target as HTMLElement
    const id = target.dataset.id

    navigate({
      to: '/posts/$postId',
      params: { postId: id },
      viewTransition: true
    })
  }

  return (
    <div>
      <ul
        className='cursor-pointer'
        onClick={onClick}
      >
        {data.map((todo: TodoItem) => {
          return (
            <li
              className='hover:bg-blue-100'
              key={todo.id}
              data-id={todo.id}
            >
              {todo.title}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
