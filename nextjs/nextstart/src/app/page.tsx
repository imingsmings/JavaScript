'use client'

import NavBar from '@/components/NavBar'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const navigate = (page: string) => {
    router.push(`/${page}`)
  }

  return (
    <div>
      <NavBar></NavBar>
      <button onClick={() => navigate('about')}>Go to about page</button>
    </div>
  )
}
