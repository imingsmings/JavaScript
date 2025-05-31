export type Post = {
  id: string
  title: string
  content: string
  publishedAt: string
}

export const allPosts: Post[] = [
  {
    id: 'hello-world',
    title: 'Hello World',
    content: '这是我的第一篇博客文章，欢迎来到我的静态博客！',
    publishedAt: '2025-05-01'
  },
  {
    id: 'learn-nextjs',
    title: '学习 Next.js 静态生成',
    content: '这篇文章演示如何使用 App Router 中的 SSG (generateStaticParams)。',
    publishedAt: '2025-05-10'
  }
]
