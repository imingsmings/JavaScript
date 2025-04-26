import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { RouterProvider } from 'react-router'
// import router from './router'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

import './index.css'

const router = createRouter({ routeTree })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <RouterProvider router={router} />
  </StrictMode>
)
