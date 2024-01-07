function request() {
    return fetch('https://api.github.com/users/imingsmings')
}

function m1() {
    return request()
}

function m2() {
    return m1()
}

function m3() {
    return m2()
}

function main() {
    const result = m3()
    console.log(result);
}

function run(func) {

    const orininFetch = window.fetch
    const result = {
        status: 'pending',
        data: null
    }

    window.fetch = (...args) => {
        if (result.status !== 'pending') {
            window.fetch = orininFetch
            return result.data
        } 

        const promise = orininFetch(...args).then(res => {
            return res.json()
        }).then((data) => {
            result.status = 'fulfilled'
            result.data = data
        })

        throw promise
    }

    try {
        func()
    } catch (err) {
        if (err instanceof Promise) {
            err.then(func)
        }
    }

}

run(main)