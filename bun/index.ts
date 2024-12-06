import express from 'express'

const app = express()

app.get('/', (req, res, next) => {
    res.json({
        name: 'bun',
        age: 1
    })
})

app.listen(8000, () => {
    console.log('Server start successfully!!')
})
