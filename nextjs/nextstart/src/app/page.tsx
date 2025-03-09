'use client'

import NavBar from '@/components/NavBar'
import { useRouter } from 'next/navigation'
import { Bebas_Neue } from 'next/font/google'

const babasFont = Bebas_Neue({
  subsets: ['latin'],
  weight: '400'
})

export default function Home() {
  const router = useRouter()

  const navigate = (page: string) => {
    router.push(`/${page}`)
  }

  return (
    <div>
      <NavBar></NavBar>
      <button onClick={() => navigate('about')}>Go to about page</button>
      <p className={`${babasFont.className}`}>This is testing for fonts</p>
    </div>
  )
}
