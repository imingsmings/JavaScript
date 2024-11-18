import React from '../react/index.js'

const App = (
    <div className='div'>
        <h1
            className='h1'
            title='hello world'
            onClick={handleClick}
        >
            <span className='span'>hello world</span>
        </h1>
        <a
            className='a'
            href='http://localhost:8000/'
        >
            Link
        </a>
    </div>
)

function handleClick(e) {
    console.log(e)
}

export default App
