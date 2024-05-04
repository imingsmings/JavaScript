function getSearchObj() {
    const { search } = window.location
    const searchStr = search.slice(1)
    const pairs = searchStr.split('&')
    const searchObj: Record<string, string> = {}
    pairs.forEach((pair) => {
        const [key, value] = pair.split('=')
        searchObj[key] = value
    })
    return searchObj
}

async function fetchData(id: number) {
    return fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
    )
        .then((res) => res.json())
        .then((res) => res)
}

export { getSearchObj, fetchData }
