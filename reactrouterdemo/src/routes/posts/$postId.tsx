import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/$postId')({
  component: RouteComponent
})

function RouteComponent() {
  const params = Route.useParams()
  console.log(params)

  return <div>Hello {params.postId}</div>
}
