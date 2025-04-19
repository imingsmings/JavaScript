import { createBrowserRouter } from 'react-router'
import Home from '../views/Home'
import About from '../views/About'
import Layout from '../layout'
import Todo from '../views/Todo'

const router = createBrowserRouter([
  {
    // path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        path: '/',
        Component: Home
      },
      {
        path: 'about',
        Component: About
      },
      {
        // path: 'todo/:id',
        path: 'todo',
        Component: Todo
      }
    ]
  }
])

export default router
