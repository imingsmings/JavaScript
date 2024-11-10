import React, { useCallback, useState } from 'react'
import styles from './styles/mian.module.scss'

import './styles/base.css'

const App = () => {
    const [count, setCount] = useState(0)
    const handlePlus = useCallback(() => {
        setCount(count + 1)
    }, [count])

    return (
        <div className={'flex'}>
            {/* <p className='bg-red'>{count}</p> */}
            <p className={styles['bg-red']}>{count}</p>
            <p>
                <button onClick={handlePlus}>+</button>
            </p>
        </div>
    )
}

export default App
