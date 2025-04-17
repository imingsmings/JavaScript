'use client'
import { motion } from 'motion/react'

// whilwHover
// whileTap
// whileDrag

function Gesture() {
  return (
    <div>
      <motion.div
        className='box'
        transition={{ type: 'spring', stiffness: 500 }}
        // whileHover={{ scale: 1.2, rotate: 10 }}
        // whileTap={{ scale: 0.8, backgroundColor: 'orange' }}
        drag
        whileDrag={{ scale: 1.2, backgroundColor: 'orange' }}
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50
        }}
        dragElastic={0.3}
      />
    </div>
  )
}

export default Gesture
