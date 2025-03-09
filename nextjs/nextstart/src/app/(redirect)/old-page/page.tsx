import { redirect } from 'next/navigation'

const OldPage = () => {
  redirect('/new-page')

  return <div>Old Page</div>
}

export default OldPage
