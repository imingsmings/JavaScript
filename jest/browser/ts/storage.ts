const KEY = 'my-app-'

function set(key: string, value: string) {
    localStorage.setItem(KEY + key, value)
}

function get(key: string) {
    return localStorage.getItem(KEY + key)
}

export default {
    get,
    set
}
