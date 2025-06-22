import React from 'react'
import ReactDOMClient, { Root } from 'react-dom/client'
import RootComponent from './RootComponent'
// import singleSpaReact, { SingleSpaContext } from 'single-spa-react'
import { AppProps } from 'single-spa'

let app: Root | null = null
// const LifeCycle = singleSpaReact({
//   React,
//   ReactDOMClient,
//   rootComponent: RootComponent,
//   domElementGetter(props) {
//     return document.getElementById('order-service')!
//   },
//   errorBoundary(err, errInfo, props) {
//     return <div>This renders when a catastrophic error occurs</div>
//   }
// })

export async function bootstrap(props: AppProps) {
  // console.log('bootstrap:', props)
  // LifeCycle.bootstrap(props)
}

export async function mount(props: AppProps) {
  // console.log('mount:', props)
  // LifeCycle.mount(props)
  render(props)
}

export async function unmount(props: AppProps) {
  // console.log('umount:', props)
  // LifeCycle.unmount(props)
  app && app.unmount()
}

function render(props: AppProps) {
  const container = document.getElementById('order-service')!

  app = ReactDOMClient.createRoot(container)
  app.render(<RootComponent />)
}
