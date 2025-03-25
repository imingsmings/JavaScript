import { ReactNode } from 'react'

const Root = ({ children }: { children: ReactNode }) => {
  return <div className='bg-amber-400'>{children}</div>
}

export default Root
