import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import './assets/index.scss'

const root = createRoot(
    document.getElementById('root') as HTMLDivElement
)

root.render(<App />)
