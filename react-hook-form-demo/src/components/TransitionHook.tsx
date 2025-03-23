import { useState, useTransition } from 'react'

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (tab: string) => {
    startTransition(() => {
      setActiveTab(tab)
    })
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <div>Home</div>
      case 'posts':
        return <Posts></Posts>
      case 'contact':
        return <div>Contact</div>
    }
  }

  return (
    <div className='tabs'>
      <button onClick={() => handleTabChange('home')}>Home</button>
      <button onClick={() => handleTabChange('posts')}>Posts</button>
      <button onClick={() => handleTabChange('contact')}>Contact</button>
      {isPending ? 'Loading' : ''}
      {renderContent()}
    </div>
  )
}

function Posts() {
  const posts = Array.from({ length: 100000 }).map((_, index) => `Post ${index + 1}`)
  return (
    <div>
      {posts.map((post) => {
        return <div key={post}>{post}</div>
      })}
    </div>
  )
}

export default App
