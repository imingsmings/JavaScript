import { redirect } from 'next/navigation'

const NotExisting = () => {
  redirect('/not-found')

  return <div>Old Page</div>
}

export default NotExisting
