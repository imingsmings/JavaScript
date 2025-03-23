// import { Suspense } from 'react'
// import UseHook from './components/UseHook'
import FormHook from './components/FormHook'
import ActionHook from './components/ActionHook'
import TransitionHook from './components/TransitionHook'

function App() {
  return (
    <div>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <UseHook></UseHook>
      </Suspense> */}
      <FormHook></FormHook>
      <ActionHook></ActionHook>
      <TransitionHook></TransitionHook>
    </div>
  )
}

export default App
