import { useQueries } from '@tanstack/react-query'
import { useState } from 'react'

const fetchTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  return response.json()
}

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  return response.json()
}

interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

function FetchMultiple() {
  const [currentTodoId] = useState(1)
  const [currentPostId] = useState(1)

  const results = useQueries({
    queries: [
      {
        queryKey: ['todo'],
        queryFn: fetchTodos
      },
      {
        queryKey: ['post'],
        queryFn: fetchPosts
      }
    ]
  })

  const [todosQuery, postsQuery] = results

  if (todosQuery.isLoading || postsQuery.isLoading) {
    return <h1>Loading ...</h1>
  }

  if (todosQuery.error || postsQuery.error) {
    return (
      <div>
        An error occured:
        {todosQuery.error?.message || postsQuery.error?.message}
      </div>
    )
  }

  const todosData = todosQuery.data
  const postsData = postsQuery.data

  return (
    <div>
      <h1>Todos:</h1>
      <pre>
        {JSON.stringify(
          todosData.find((todo: Todo) => todo.id === currentTodoId),
          null,
          2
        )}
      </pre>
      <h1>Posts:</h1>
      <pre>
        {JSON.stringify(
          postsData.find((post: Post) => post.id === currentPostId),
          null,
          2
        )}
      </pre>
    </div>
  )
}

export default FetchMultiple
