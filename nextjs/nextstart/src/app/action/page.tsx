import { submit } from './action'

const ServerAction = () => {
  return (
    <div>
      <form action={submit}>
        <label htmlFor='name'>Name: </label>
        <input
          type='text'
          name='name'
          id='name'
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ServerAction
