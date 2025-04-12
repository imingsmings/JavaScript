export function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Fetch data successfully')
    }, 2000)
  })
}
