import { allPosts, type Post } from '@/data/post'

type Props = {
  params: Promise<{ id: string }>
}

export async function generateStaticParams(): Promise<{ id: string }[]> {
  return allPosts.map((post) => ({ id: post.id }))
}

export default async function PostPage({ params }: Props) {
  const { id } = await params

  const post: Post = allPosts.find((p) => p.id === id)!

  return (
    <article>
      <h2 style={{ marginBottom: '0.5rem' }}>{post.title}</h2>
      <p style={{ color: '#666', marginBottom: '1rem' }}>发布于：{post.publishedAt}</p>
      <div>{post.content}</div>
    </article>
  )
}
