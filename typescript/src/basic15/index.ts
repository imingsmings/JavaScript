function mergeArr<E>(arr1: E[], arr2: E[]): E[] {
    return [...arr1, ...arr2]
}

const result = mergeArr<number | string>([1, 2, 3], ['a', 'b', 'c'])