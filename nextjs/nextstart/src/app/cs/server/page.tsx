import { add, minus } from '../uitls'

const Server = () => {
  const r1 = add(1, 2)
  const r2 = minus(1, 2)

  return (
    <div>
      <h1>Server</h1>
      <p>{r1}</p>
      <p>{r2}</p>
    </div>
  )
}

export default Server
