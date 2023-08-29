function logger(target:any, propertyKey: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value;
    descriptor.value = function (...args: number[]) {
        console.log('params: ', ...args);
        const result = fn.call(this, ...args) 
        console.log('result: ', result);
        return result
    } 
}

class C {
    @logger
    add(x:number, y: number) {
        return x + y
    }
}

(new C()).add(1, 2);