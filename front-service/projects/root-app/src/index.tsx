import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import router from './router'
// import { registerApplication, start } from 'single-spa'
import { registerApplication, start } from '../../../sspa'

const container = document.getElementById('root')!

createRoot(container).render(<RouterProvider router={router} />)

// registerApplication({
//   name: 'user',
//   app: (config) => System.import('http://localhost:3001/user.js'),
//   activeWhen: '/user'
// })

// registerApplication({
//   name: 'order',
//   app: (config) => System.import('http://localhost:3002/order.js'),
//   activeWhen: '/order'
// })

// registerApplication(
//   'user',
//   (config) => System.import('http://localhost:3001/user.js'),
//   () => window.location.hash.startsWith('#/user'),
//   {
//     a: 1
//   }
// )

// registerApplication(
//   'order',
//   (config) => System.import('http://localhost:3002/order.js'),
//   () => window.location.hash.startsWith('#/order'),
//   {
//     a: 1
//   }
// )

registerApplication({
  appName: 'user',
  applicationOrLoadingFn: () => import('http://localhost:4001/user.js'),
  activityFn: () => {
    return window.location.hash.startsWith('#/user')
  },
  customProps: {
    a: 1
  }
})

registerApplication({
  appName: 'order',
  applicationOrLoadingFn: () => import('http://localhost:4002/order.js'),
  activityFn: () => {
    return window.location.hash.startsWith('#/order')
  },
  customProps: {
    b: 2
  }
})

start()
