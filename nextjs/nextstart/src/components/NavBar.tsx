import Link from 'next/link'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <div>
          <h1>Logo</h1>
        </div>

        <div>
          <Link
            href={'/'}
            className='mr-6 bg-amber-500 underline'
          >
            Home
          </Link>
          <Link
            href={'/about'}
            className='mr-6 bg-amber-500 underline'
          >
            About
          </Link>
          <Link
            href={'/contact'}
            className='mr-6 bg-amber-500 underline'
          >
            Contact
          </Link>
          <Link
            href={'/dashboard'}
            className='mr-6 bg-amber-500 underline'
          >
            Dashboard
          </Link>
        </div>
      </ul>
    </nav>
  )
}

export default NavBar
