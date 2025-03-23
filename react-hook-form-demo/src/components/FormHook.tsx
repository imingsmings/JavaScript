import { useFormStatus } from 'react-dom'

function App() {
  const formAction = async (formData: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const userData = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    }
    console.log(userData)
  }

  return (
    <form action={formAction}>
      <label htmlFor='name'>Name</label>
      <input
        type='text'
        id='name'
        name='name'
      />
      <br />
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        id='email'
        name='email'
      />
      <br />
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        id='password'
        name='password'
      />
      <br />
      <Button></Button>
    </form>
  )
}

function Button() {
  const { pending } = useFormStatus()

  return <button type='submit'>{pending ? 'Loading' : 'Submit'}</button>
}

export default App
