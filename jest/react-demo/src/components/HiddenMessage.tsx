import { useState, ReactNode } from 'react'

interface Props {
    children: ReactNode
}

function HiddenMessage({ children }: Props) {
    const [isShow, setIsShow] = useState(false)
    return (
        <div>
            <label htmlFor='toggle'>Show Info</label>
            <input
                type='checkbox'
                name='toggle'
                id='toggle'
                checked={isShow}
                onChange={(e) =>
                    setIsShow(e.target.checked)
                }
            />
            {isShow ? children : null}
        </div>
    )
}

export default HiddenMessage
