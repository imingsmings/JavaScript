import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'

interface Todo {
  id: number
  title: string
  completed: boolean
}

const postTodo = async (newTodo: Todo) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTodo)
  })
  return response.json()
}

function MutatingData() {
  // const queryClient = useQueryClient()
  const [title, setTitle] = useState('')

  const result = useMutation<Todo, Error, Todo>({
    mutationFn: postTodo,
    onSuccess: () => {
      // queryClient.invalidateQueries(['todos'])
    },
    onError: () => {},
    onSettled: () => {}
  })

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (title.trim() === '') return

    result.mutate({ title, completed: false, id: Date.now() })
    setTitle('')
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor='title'>Title: </label>
        <input
          type='text'
          id='title'
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='border'
        />
        <button
          type='submit'
          className='bg-amber-400 border'
          disabled={result.status === 'pending'}
        >
          {result.status === 'pending' ? 'Saving...' : 'Submit'}
        </button>
      </form>
    </div>
  )
}

export default MutatingData
