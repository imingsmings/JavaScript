import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

function Main({ children }: Props) {
  return <main className='bg-amber-50 flex-1'>{children}</main>
}

export default Main
