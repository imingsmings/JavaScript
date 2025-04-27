import { createFileRoute, useParams } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/$postId')({
  component: RouteComponent,
  loader: ({ params }) => {
    console.log(params)
  }
})

function RouteComponent() {
  // const params = Route.useParams()
  const params = useParams({ strict: false })
  // console.log(params)

  return <div>Hello {params.postId}</div>
}
