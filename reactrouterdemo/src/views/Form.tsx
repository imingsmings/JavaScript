import { Form } from 'react-router'

function FormDemo() {
  return (
    <div>
      <Form
        action='/form'
        method='post'
      >
        <div>
          <label htmlFor='name'>Name: </label>
          <input
            className='border-amber-500 border-1'
            type='text'
            name='name'
            id='name'
          />
        </div>

        <div className='mt-2'>
          <label htmlFor='age'>Age: </label>
          <input
            className='border-amber-500 border-1'
            type='number'
            name='age'
            id='age'
          />
        </div>

        <button
          type='submit'
          className='bg-amber-500 px-2 py-1 rounded-lg text-white mt-2'
        >
          Submit
        </button>
      </Form>
    </div>
  )
}

export default FormDemo
