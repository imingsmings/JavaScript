import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Work from './progress'
import { Link, Route, Routes } from 'react-router-dom'

class App extends React.Component {
  render () {
    return (
      <>
        {/* <BrowserRouter> */}
        <Link to={'/home'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Routes>
          <Route path={'/home'} element={<Home />} />
          <Route path={'/about'} element={<About />} />
        </Routes>
        {/* </BrowserRouter> */}
        <hr/>
        <Work/>
      </>
    )
  }
}
export default App
