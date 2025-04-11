export function sum(arr) {
  return arr.reduce((acc, curr) => {
    return acc + curr
  }, 0)
}

export function findMax(arr) {
  return Math.max(...arr)
}

export function findMin(arr) {
  return Math.min(...arr)
}

export function filterEven(arr) {
  return arr.filter((num) => num % 2 === 0)
}
