import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import './global.css'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const props = window.__INITIAL_PROPS__

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App {...props} />
  </StrictMode>
)
