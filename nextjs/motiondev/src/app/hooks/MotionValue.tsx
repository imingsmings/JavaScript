'use client'
import { motion, useMotionValue, useMotionValueEvent, useSpring } from 'motion/react'
import { ChangeEvent } from 'react'

function MotionValue() {
  // const x = useMotionValue(60)

  // useMotionValueEvent(x, 'animationStart', () => {
  //   console.log('animationStart')
  // })

  // useMotionValueEvent(x, 'change', (latest) => {
  //   console.log(latest)
  // })

  // const scale = useMotionValue(1) // not smooth
  const scale = useSpring(1)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    scale.set(Number.parseFloat(e.target.value))
  }

  return (
    // <motion.div
    //   className='box'
    //   style={{ x: x }}
    //   drag
    // />
    <>
      <motion.div
        className='box'
        style={{ scale }}
      ></motion.div>

      <div className='mt-[6rem]'>
        <input
          type='range'
          min={0.5}
          max={5}
          step={0.01}
          defaultValue={1}
          onChange={onChange}
        />
      </div>
    </>
  )
}

export default MotionValue
