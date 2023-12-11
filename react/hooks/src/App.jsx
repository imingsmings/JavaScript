import {    
    useState,
    // useEffect,
    // useReducer,
    memo,
    useMemo,
    useCallback
} from './React'
// import {
//     useState,
//     useEffect,
//     useReducer
// } from 'react'

// function Child( { count }) {
//     console.log('Child render');
//     return (
//         <h1>Child count: {count}</h1>
//     )
// }

const Child = memo(function ( { count, cb }) {
    console.log('Child render');
    return (
       <>
         <h1>Child count: {count}</h1>
         {/* <h1>obj count: {obj.a}</h1> */}
       </>
    )
})

export default function App() {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    // const [count, setCount] = useState(() => 0)
    // const [count1, setCount1] = useState(1)

    // function reducer(state = 0, { type, payload } = {}) {
    //     switch (type) {
    //         case 'PLUS':
    //             return state + payload
    //         case 'MINUS':
    //             return state - payload
    //         default:
    //             return state
    //     }
    // }

    // const [ count, dispatch] = useReducer(reducer, 0)

    // const setState = () => {
    //     // setCount(count + 1)
    //     // setCount(count + 1)
    //     // setCount(count + 1)

    //     // setCount(count => count + 1)
    //     // setCount(count => count + 1)
    //     // setCount(count => count + 1)

    //     setCount(count + 1)
    // }

    // useEffect(() => {
    //     console.log('effect 1');

    //     return () => {
    //         console.log('clear effect 1');
    //     }
    // })

    // useEffect(() => {
    //     console.log('effect 2');
    // }, [])

    // useEffect(() => {
    //     console.log('effect 3');

    //     return () => {
    //         console.log('clear effect 3');
    //     }
    // }, [count])

    // useEffect(() => {
    //     console.log('effect 4');

    //     return () => {
    //         console.log('clear effect 4');
    //     }
    // }, [count])

    // console.log('render');

    // const obj = useMemo(() => {
    //     return {a: 1}
    // }, [count])

    const cb = useCallback(() => {

    }, [])

    return (
        <div>
            <p>count: { count }</p>
            {/* <button onClick={() => dispatch({ type: 'PLUS', payload: 1})}>+</button>
            <button onClick={() => dispatch({ type: 'MINUS', payload: 1})}>-</button> */}

            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count => count - 1)}>-</button>
            <p>count1: { count1 }</p>
            <button onClick={() => setCount1(count1 + 1)}>+</button>
            <button onClick={() => setCount1(count1 => count1 - 1)}>-</button>
            {/* <Child count={count1} obj={obj} cb={cb}/> */}
            <Child count={count1}cb={cb}/>
            {/* <button onClick={setState}>+</button> */}
            <hr />
            {/* <p>count1: { count1 }</p>
            <button onClick={() => setCount1(count1 + 1)}>+</button>
            <button onClick={() => setCount1(count1 - 1)}>-</button> */}
        </div>
    )
}
