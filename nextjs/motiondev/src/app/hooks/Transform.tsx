'use client'
import { motion, useMotionValue, useTransform } from 'motion/react'

function Transform() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const bgc = useTransform(x, [-100, 100], ['#ff0000', '#00ff00'])

  return (
    <div>
      <motion.div
        className='w-32 h-32 flex items-center justify-center rounded-lg shadow-lg cursor-pointer'
        drag
        dragConstraints={{
          left: -200,
          right: 200,
          top: -200,
          bottom: 200
        }}
        style={{ x, y, backgroundColor: bgc }}
      >
        <span className='text-white'>Drag Me!</span>
      </motion.div>
    </div>
  )
}

export default Transform
