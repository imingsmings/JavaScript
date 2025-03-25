import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}
const Layout = ({ children, ...props }: Props) => {
  return <main>{children}</main>
}

export default Layout
