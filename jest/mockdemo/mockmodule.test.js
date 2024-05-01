const axios = require('axios')
const useData = require('./users.json')

function getUsers() {
    return new Promise(async (resolve) => {
        try {
            const res = await axios.get('/users.json')
            resolve(res.data)
        } catch (e) {
            reject(e)
        }
    })
}

// 模拟 axios 模块
// jest.mock('axios')
// test('Fetch user data', async () => {
//     const res = {
//         data: useData
//     }

//     axios.get.mockImplementation(() => Promise.resolve(res))

//     await expect(getUsers()).resolves.toEqual(useData)
// })

jest.mock('axios', () => {
    const userData = require('./users.json')

    const resp = {
        data: userData
    }

    return {
        get: jest.fn(() => Promise.resolve(resp))
    }
})

test('Fetch user data', async () => {
    await expect(getUsers()).resolves.toEqual(useData)
})
