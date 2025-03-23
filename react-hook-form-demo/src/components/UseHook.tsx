'use client'

import { createContext, use } from 'react'

async function fetchData() {
  return {
    name: 'Tom',
    age: 12
  }
}

const ThemeContext = createContext('light')

function App() {
  const data = use(fetchData())
  const theme = use(ThemeContext)

  return (
    <div>
      <p>
        {data.name} - {data.age}
      </p>
      <p>{theme}</p>
    </div>
  )
}

export default App
