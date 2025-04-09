// import { useState } from 'react'
import { create } from 'zustand'

type State = {
  count: number
}

type StateAction = {
  inc: () => void
  dec: () => void
}

const useStore = create<State & StateAction>((set) => {
  return {
    count: 0,
    inc: () => {
      set((state) => ({ ...state, count: state.count + 1 }))
    },
    dec: () => {
      set((state) => ({ ...state, count: state.count - 1 }))
    }
  }
})

function App() {
  const { count, inc, dec } = useStore()

  return (
    <>
      <p>{count}</p>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </>
  )
}

export default App
