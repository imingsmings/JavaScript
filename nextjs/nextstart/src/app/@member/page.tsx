import Link from 'next/link'

const Member = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return (
    <div>
      <h1>Member</h1>
      <Link href={'/jason'}>Go to Jason</Link>
    </div>
  )
}

export default Member
