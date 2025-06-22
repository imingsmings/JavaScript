import { createBrowserRouter, createHashRouter } from 'react-router'
import App from '../views/App'
import User from '../views/User'
import Order from '../views/Order'

const router = createHashRouter([
  {
    Component: App,
    path: '/',
    children: [
      {
        Component: User,
        path: '/user'
      },
      {
        Component: Order,
        path: '/order'
      }
    ]
  }
])

export default router
