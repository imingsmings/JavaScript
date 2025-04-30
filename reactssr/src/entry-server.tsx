import { StrictMode } from 'react'
import {
  // renderToString,
  renderToPipeableStream,
  RenderToPipeableStreamOptions
} from 'react-dom/server'
import App from './App.tsx'

// export function render() {
//   const html = renderToString(
//     <StrictMode>
//       <App />
//     </StrictMode>
//   )
//   return { html }
// }

export function render(options: RenderToPipeableStreamOptions) {
  const { pipe } = renderToPipeableStream(
    <StrictMode>
      <App />
    </StrictMode>,
    options
  )
  return { pipe }
}
