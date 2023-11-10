interface ITests<T> {
    a: T;
    b: T;
}

const test: ITests<number> = {
    a: 1,
    b: 2
}

const test2: ITests<string> = {
    a: '1',
    b: '2'
}