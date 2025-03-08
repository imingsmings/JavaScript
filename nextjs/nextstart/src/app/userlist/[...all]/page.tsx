interface Props {
  params: Promise<{
    all: string[]
  }>
}
const User = async ({ params }: Props) => {
  const { all } = await params

  return (
    <div>
      User List slugs
      <div>{all.join('/')}</div>
    </div>
  )
}

export default User
