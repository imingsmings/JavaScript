/**
 * 对变量与变量值的操作问题
 */

const _ = require('lodash')

const obj = {
    a: 1,
    b: 2
}

// 最原始的赋值操作
// obj.a = 100
/**
 * 缺点
 * 1. 语义化不好
 * 2. 不能做扩展
 * 3. 不易维护
 */

// 函数纯度不高
// function setData(key, value, cb) {
//     obj[key] = value

//     cb && cb(key, value)

//     // do more things
// }

// setData('a', 1000)

// --------------------------------------------

// data引用传递 影响了外界 函数纯度也不高
// function setData(data, key, value){
//     data[key] = value
// }

// setData(obj, 'a', 1000)

// console.log(obj);

// --------------------------------------------

// function setData(data, key, value) {
//     const _data = _.cloneDeep(data)
//     _data[key] = value

//     return _data
// }

// 必须执行setData才能得到结果
// 有没有一种既可以让setData可以使用，结果也可以拿到，而不是通过执行拿到结果
// setData(obj, 'a', 1000)

// console.log(obj);

// --------------------------------------------

// function useData(data) {
//     const _data = _.cloneDeep(data)

//     function setData(key, value) {
//         _data[key] = value
//     }

//     // 外界解构时，名称肯呢个重复
//     return {
//         data: _data,
//         setData
//     }
// }

// const {
//     data,
//     setData
// } = useData(obj)

// setData('a', 1000)

const obj2 = {
    c: 1,
    d: 2
}

// const {
//     data,
//     setData
// } = useData(obj2)

// --------------------------------------------

// function useData(data) {
//     const _data = _.cloneDeep(data)

//     function setData(key, value) {
//         _data[key] = value
//     }

//     return [_data, setData]
// }

// const [data, setData] = useData(obj)
// const [data2, setData2] = useData(obj2)

// --------------------------------------------

/**
 * React只会浅监听
 * {
 *  a: 1,
 *  b: 2,
 * }
 * 
 * obj.a = 1 => React不进行监听
 * 
 * obj => 新的值 => 触发渲染
 */

const states = [];
const stateSetters = []
let stateIndex = 0;

function isDefined(value) {
    return typeof value !== "undefined" ? value : undefined
}

function useData(data) {
    states[stateIndex] = isDefined(states[stateIndex]) || _.cloneDeep(data)

    if(typeof stateSetters[stateIndex] !== 'function') {
        stateSetters[stateIndex] = ((stateIndex) => {
            return (newValue) => {
                states[stateIndex] = newValue
                render()
            }
        })(stateIndex)
    }

    const _state = states[stateIndex]
    const _setState = stateSetters[stateIndex]

    stateIndex ++

    return [_state, _setState]
}

function App() {
    const [data1, setData1] = useData({ a: 1, b: 2})
    const [data2, setData2] = useData({ c: 3, d: 4})

    // setData1('a', 1000)
    // setData2('d', 4000)
   
    setTimeout(() => {
        setData1({ ...data1, a: 1000})
        setData2({ ...data2, c: 4000})

        console.log(data1, data2);
    }, 1000)

}

function render() {
    stateIndex = 0
    App()
}

render()