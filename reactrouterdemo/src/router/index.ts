import { createBrowserRouter } from 'react-router'
import Home from '../views/Home'
// import About from '../views/About'
import Layout from '../layout'
import Todo from '../views/Todo'
import { todoData } from '../data/todos'
import Form from '../views/Form'

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

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
        // Component: About
        lazy: async () => {
          await sleep(2000)
          const Component = await import('../views/About')
          return {
            Component: Component.default
          }
        }
      },
      {
        path: 'todo/:id',
        Component: Todo,
        // loader: ({ params }) => {
        //   const todo = todoData.find((todo) => todo.id === Number(params.id))
        //   return todo
        // }
        loader: async ({ params }) => {
          await sleep(1000)
          const todo = todoData.find((todo) => todo.id === Number(params.id))
          return todo
        }
      },
      {
        path: 'form',
        Component: Form,
        action: async ({ request }) => {
          const formData = await request.formData()
          const data = {
            name: formData.get('name'),
            age: formData.get('age')
          }
          console.log(data)
        }
      }
    ]
  }
])

export default router
