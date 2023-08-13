import './style.css'
import { render } from './renderA'

render()

console.log('---->')

if (import.meta.hot) {
  // import.meta.hot.accept((newModule) => {
  //   newModule.render()
  // })
  // import.meta.hot.accept(['./style,css'])
  import.meta.hot.accept(['./renderA'], ([newA]) => {
    newA.render()
  })
  // import.meta.hot.accept(() => {})
  import.meta.hot.decline()
}
