import { useActionState } from 'react'

async function submitAction(prevState: number, formData: FormData) {
  const name = formData.get('name')
  if (!name) {
    return { error: 'Name is required' }
  }

  // 模拟异步请求
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return prevState + 1
}

function App() {
  const [state, formAction] = useActionState(submitAction, 0)

  console.log(state)

  return (
    <form action={formAction}>
      <label htmlFor='name'>Name: </label>
      <input
        type='text'
        id='name'
        name='name'
      />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default App
