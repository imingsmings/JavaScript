import React, { useState } from '../react/index.js'
import ReactDOM from '../react-dom/index.js'
// import App from './App.js'

function Counter() {
    const [state, setState] = useState(1)
    // const [state2, setState2] = useState(2)

    function onClickHandle() {
        // setState((state) => state + 1)
        // setState((state) => state + 2)
        setState(state + 1)
    }
    return (
        <div>
            <h1>Count: {state}</h1>
            <button onClick={onClickHandle}>+Add</button>
            <hr />
            {/* <h1>Count2: {state2}</h1>
            <button onClick={() => setState2((state) => state + 1)}>+1</button>
            <button onClick={() => setState2((state) => state + 2)}>+2</button> */}
        </div>
    )
}

const root = document.getElementById('root')

ReactDOM.render(<Counter />, root)
