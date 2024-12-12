fetch('https://127.0.0.1:8001/v1/user/list/5/1', {
    cors: true
})
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
    })
