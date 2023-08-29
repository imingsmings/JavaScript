function configurable(value: boolean) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        descriptor.enumerable = !value
        // console.log(descriptor);
    }
}

class Point {
    private _x: number;
    private _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    @configurable(false)
    get x() {
        return this._x
    }

    @configurable(false)
    get y() {
        return this._y
    }
}

const p = new Point(1, 2)

// console.log(p);

for (let key in p) {
    console.log(key);
}