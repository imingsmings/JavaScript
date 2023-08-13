import React, { useEffect, useState } from 'react'
import { Progress, Button } from 'antd'
import 'antd/dist/antd.css'
import style from './inde.module.css'

const Work = () => {
  const [percent, setPercent] = useState(0)
  const [progress, setProgress] = useState([0, 5, 10, 15, 23, 40, 55, 60, 85, 90, 100])
  const [index, setIndex] = useState(0)

  const timer = setInterval(() => {
    setIndex(index + 1)
  }, 1000)

  useEffect(() => {
    setPercent(progress[index])
  }, [index])

  useEffect(() => {
    return () => {
      clearInterval(timer)
    }
  })

  // const onIndexChange = () => {
  //   setIndex(index + 1)
  // }

  return (
    <div className={style.container}>
      <Progress percent={percent} size="small" />
      {/* <Button onClick={onIndexChange}>执行</Button> */}
    </div>
  )
}

export default Work
