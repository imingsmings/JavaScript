import { useState, useEffect } from 'react'

const obj = {
    a: 1
}
export default function App() {
    const [count, setCount ] = useState(obj)
    console.log(count);
    console.log(obj);

    // useEffect(() => {
    //     // console.log('Initial Render');
    //     console.log(count);
    // }, [count])

    useEffect(() => {
        // let t = setInterval(() => {
        //     setCount(count => count + 1)
        // }, 1000)

        return () => {
            // clearInterval(t)
        }
    }, [])

    console.log('render');
    return (
        <div className='use-state'>
            <p>{count.a}</p>
            <button onClick={ () => setCount({ ...count, a: count.a + 1})}>Plus</button>
            <button onClick={ () => setCount({ ...count, a: count.a - 1})}>Minus</button>
        </div>
    )
}
