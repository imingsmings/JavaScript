import { useState } from 'react'

export default function App() {
    const [count, setCount ] = useState(0)

    return (
        <div className='use-state'>
            <p>{count}</p>
            <button onClick={ () => setCount(count + 1)}>Plus</button>
            <button onClick={ () => setCount(count => count - 1)}>Minus</button>
        </div>
    )
}
