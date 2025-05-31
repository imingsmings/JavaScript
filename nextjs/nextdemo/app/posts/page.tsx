import Link from 'next/link'
import { allPosts, type Post } from '@/data/post'

export default function PostsList() {
  return (
    <section>
      <h2>所有文章</h2>
      <ul>
        {allPosts.map((post: Post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
