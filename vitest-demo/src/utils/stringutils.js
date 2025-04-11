export function toUppercase(str) {
  return str.toUpperCase()
}

export function toLowerCase(str) {
  return str.toLowerCase()
}

export function reverse(str) {
  return str.split('').reverse().join('')
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}
