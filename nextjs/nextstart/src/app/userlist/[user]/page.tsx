interface Props {
  params: Promise<{ user: string }>
}

const User = async ({ params }: Props) => {
  const user = (await params).user

  return <div>{user}</div>
}

export default User
