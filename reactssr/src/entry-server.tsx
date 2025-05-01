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

interface Props {
  data: object
}
export function render(options: RenderToPipeableStreamOptions, props?: Props) {
  const appProps = props || {}
  const { pipe } = renderToPipeableStream(
    <StrictMode>
      <App {...appProps} />
    </StrictMode>,
    options
  )
  return { pipe }
}
