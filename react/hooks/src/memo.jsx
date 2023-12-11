// import { 
//  useState,
//  memo,
//  useMemo,
//  useCallback
// } from 'react'

// // function Child ({ count2 }) {
// //     console.log('Child rerendered');
// //     return (
// //         <h1>Count2: {count2}</h1>
// //     )
// // }

// // const Child = memo(({ count2 }) => {
// //     return (
// //         <h1>Count2: {count2}</h1>
// //     )
// // })

// const Child = memo(({ data }) => {
//     console.log('Child rerendered');
//     return (
//         <h1>Count2: {data.count2}</h1>
//     )
// })

// function App() {
//     const [count1, setCount1] = useState(0)
//     const [count2, setCount2] = useState(0)

//     // const data = {
//     //     count2
//     // }

//     const data = useMemo(() => ({ count2 }), [ count2 ])

//     const cbSetCount2 = useCallback(() => {
//         setCount2(count2 => count2 + 1)
//     }, [])

//     return (
//         <div>
//             <h1>Count1: {count1}</h1>
//             <button onClick={() => setCount1(count1 + 1)}>count1 +</button>
//             {/* <Child count2={count2}/> */}
//             <Child data={data} setCount2={cbSetCount2} />
//             <button onClick={() => setCount2(count2 + 1)}>count2 +</button>
//         </div>
//     )
// }

// export default App
