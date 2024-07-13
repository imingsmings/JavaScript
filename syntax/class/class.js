const privateData = new WeakMap()

class ClassWithPrivate {
    constructor(options) {
        // this[$options] = options
        privateData.set(this, options)
    }

    getOptions() {
        return privateData.get(this)
        // return this[$options]
    }
}

export default ClassWithPrivate
