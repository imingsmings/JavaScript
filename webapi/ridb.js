const root = document.getElementById('root')
const count = 500000

const tasks = []

for (let i = 0; i < count; i++) {
    // const div = document.createElement('div')
    // div.textContent = `${i}`
    // root.append(div)
    tasks.push(append.bind(null, root, i))
}

function append(root, i) {
    const div = document.createElement('div')
    div.textContent = `${i}`
    root.append(div)
}

function processChunk(tasks) {
    const queues = [...tasks]

    const run = (deadline) => {
        while (deadline.timeRemaining() > 0) {
            const task = queues.shift()
            task()
        }

        if (queues.length > 0) {
            requestIdleCallback(run)
        }
    }

    requestIdleCallback(run)
}

processChunk(tasks)
