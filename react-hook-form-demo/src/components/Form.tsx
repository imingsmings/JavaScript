import { SubmitHandler, useForm } from 'react-hook-form'

interface FormData {
  name: string
  email: string
  password: string
}

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='name'>Name: </label>
        <input
          type='text'
          id='name'
          {...register('name', {
            required: 'Name is requried'
          })}
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor='email'>Email: </label>
        <input
          type='email'
          id='email'
          {...register('email', {
            required: 'Email is requried',

            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Invalid email address'
            }
          })}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor='password'>Password: </label>
        <input
          type='password'
          id='password'
          placeholder='Password'
          {...register('password', {
            required: 'Password is requried',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters'
            }
          })}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
      </div>
      <button
        type='submit'
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Loading' : 'Submit'}
      </button>
    </form>
  )
}

export default Form
