import React from '../react/index.js'

const App = (
    <div>
        Text Element
        <h1
            title='hello world'
            onClick={handleClick}
        >
            hello world
        </h1>
        <h2>
            <a href='http://localhost:8000/'>Link</a>
        </h2>
    </div>
)

function handleClick(e) {
    console.log(e)
}

export default App
