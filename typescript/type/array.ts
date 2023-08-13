// const arr: string[] = ['a', 'b', 'c']
// const brr: Array<number> = [1, 2, 3]

// const arr: ReadonlyArray<string> = ['a', 'b', 'c']
// Property 'push' does not exist on type 'readonly string[]'.
// arr.push('d')

// new Array(1, 2, 3)
// 'ReadonlyArray' only refers to a type, but is being used as a value here.
// new ReadonlyArray(1, 2, 3)

let x: readonly string[] = []
let y: string[] = []

x = y
// the type 'readonly string[]' is 'readonly' and cannot be assigned to the mutable type 'string[]'
y = x