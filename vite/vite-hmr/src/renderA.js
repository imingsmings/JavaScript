let timer = null
let index = import.meta.hot.data.cache && import.meta.hot.data.cache.getIndex
  ? import.meta.hot.data.cache.getIndex()
  : 0

export const render = () => {
  timer = setInterval(() => {
    index++
    document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a 
    href="https://vitejs.dev/guide/features.html" 
    target="_blank">
    Documentation${index}
  </a>
`
  }, 1000)
}

// let index = 0
// const timer = setInterval(() => {
//   console.log(index++)
// }, 1000)

if (import.meta.hot) {
  // 清除副作用
  import.meta.hot.dispose(() => {
    if (timer) {
      clearInterval(timer)
    }
  })

  // 缓存数据
  import.meta.hot.data.cache = {
    getIndex: () => {
      return index
    }
  }
}
