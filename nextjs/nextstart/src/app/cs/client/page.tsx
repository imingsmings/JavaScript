'use client'

import { add, minus } from '../uitls'

const Client = () => {
  const r1 = add(1, 2)
  const r2 = minus(1, 2)

  return (
    <div>
      <h1>Client</h1>
      <p>{r1}</p>
      <p onClick={() => {}}>{r2}</p>
    </div>
  )
}

export default Client
