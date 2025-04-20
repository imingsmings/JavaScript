import { NavLink, useNavigationType, useResolvedPath } from 'react-router'

function About() {
  const type = useNavigationType()
  console.log(type)

  const path = useResolvedPath('../accounts')
  // path.pathname; // "/dashboard/accounts"
  console.log(path)

  return (
    <div>
      <NavLink to={'/'}>Home</NavLink>
    </div>
  )
}

export default About
