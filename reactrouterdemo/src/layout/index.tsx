import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <div className='h-screen flex flex-col'>
      <Header></Header>
      <Main>
        <Outlet />
      </Main>
      <Footer></Footer>
    </div>
  )
}

export default Layout
