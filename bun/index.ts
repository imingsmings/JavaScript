import express from 'express'

const app = express()

app.use('*', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Authorization')
    next()
})

app.get('/', (req, res, next) => {
    res.json({
        name: 'bun',
        age: 1
    })
})

app.listen(8000, () => {
    console.log('Server start successfully!!')
})
