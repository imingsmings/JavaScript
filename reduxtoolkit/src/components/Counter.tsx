import { decrement, increment } from '../store/action'
import { useAppDispatch, useAppSelector } from '../store/hooks'

function Counter() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatth = useAppDispatch()

  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => dispatth(increment())}>+</button>
      <button onClick={() => dispatth(decrement())}>+</button>
    </>
  )
}

export default Counter
