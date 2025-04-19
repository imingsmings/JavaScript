import { createBrowserRouter } from 'react-router'
import Home from '../views/Home'
import About from '../views/About'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home
  },
  {
    path: '/about',
    Component: About
  }
])

export default router
