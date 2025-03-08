'use client'

import Link from 'next/link'
import { ReactNode, useState } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
  const [text, setText] = useState('')
  return (
    <>
      <div>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div>
          <Link
            href={'/analytics/about'}
            title='About'
          >
            About
          </Link>
          <Link
            href={'/analytics/contact'}
            title='Contact'
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  )
}

export default Layout
