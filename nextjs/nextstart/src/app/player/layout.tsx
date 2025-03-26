import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  sidebar: ReactNode
  list: ReactNode
  favorite: ReactNode
}

const RootLayout = ({ children, ...props }: Props) => {
  return (
    <main className='flex h-full'>
      <div className='flex-1/4 flex flex-col'>
        <div className='flex-2/3 bg-blue-400'>{props.sidebar}</div>
        <div className='flex-1/3 bg-blue-500 overflow-scroll'>{props.favorite}</div>
      </div>
      <div className='flex-3/4 bg-blue-600'>{props.list}</div>
    </main>
  )
}

export default RootLayout
