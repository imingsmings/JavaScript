import React from 'react'
import { NavLink, Outlet } from 'react-router'

function App() {
  return (
    <div>
      <div>
        <NavLink
          to={'/user'}
          style={{ marginRight: 8 }}
        >
          User
        </NavLink>
        <NavLink to={'/order'}>Order</NavLink>
      </div>
      <div>{/* <Outlet /> */}</div>
    </div>
  )
}

export default App
