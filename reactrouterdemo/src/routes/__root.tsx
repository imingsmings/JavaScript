import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <div className='p-2 flex gap-2'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/posts'>Posts</Link>
        </div>
        <hr />
        <Outlet />
        <TanStackRouterDevtools />
      </>
    )
  },
  notFoundComponent: () => {
    return <div className='text-red-500'>Page Not Found.</div>
  }
})
