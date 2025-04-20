import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { Outlet, useNavigation } from 'react-router'

function Layout() {
  const navigation = useNavigation()
  const loading = navigation.state === 'loading'

  return (
    <div className='h-screen flex flex-col'>
      <Header></Header>
      <Main>{loading ? <div>Loading ...</div> : <Outlet />}</Main>
      <Footer></Footer>
    </div>
  )
}

export default Layout
