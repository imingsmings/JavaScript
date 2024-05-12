import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { Button } from 'antd'
import 'moment/locale/zh-cn'

export default function App() {
    const [time, setTime] = useState(
        moment().format('YYYY:MM:DD HH:mm:ss')
    )

    useEffect(() => {
        let timer = setInterval(() => {
            setTime(moment().format('YYYY:MM:DD HH:mm:ss'))
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <div>
            <p>{time.toString()}</p>
            <Button type='primary'>Button</Button>
        </div>
    )
}
