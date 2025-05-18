import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { useMemo } from 'react'

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => {
    return <div className='text-red-500'>Page Not Found.</div>
  }
})

function RootComponent() {
  const linkProps = useMemo(() => {
    return {
      activeProps: {
        className: 'font-bold'
      },
      inactiveProps: {
        className: 'text-gray-500'
      }
    }
  }, [])

  return (
    <>
      <div className='p-2 flex gap-2'>
        <Link
          to='/'
          {...linkProps}
        >
          Home
        </Link>
        <Link
          to='/about'
          {...linkProps}
        >
          About
        </Link>
        <Link
          to='/posts'
          {...linkProps}
        >
          Posts
        </Link>
        <Link
          to='/upload'
          {...linkProps}
        >
          Upload
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  )
}
