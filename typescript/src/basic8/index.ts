interface IPlus{
    (a: number, b: number): number;
}

const plus: IPlus = (a: number, b: number): number => {
    return a + b
}