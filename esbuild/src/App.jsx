import React, { useState } from 'react'
import Title from './components/Title'

function App() {
    const [count, setCount] = useState(1)

    return (
        <div>
            <Title title={'This is a title'} />
            <p>{count}</p>
            <p>
                <button onClick={() => setCount(count + 1)}>
                    Plus
                </button>
                <button onClick={() => setCount(count - 1)}>
                    Minus
                </button>
            </p>
        </div>
    )
}

export default App
