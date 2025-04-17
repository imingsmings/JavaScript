'use client'
import { hover, motion } from 'motion/react'
import { useState } from 'react'

const variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.5 }
}

// function Variant() {
//   const [visible, setVisible] = useState(true)

//   return (
//     <div>
//       <motion.div
//         variants={variants}
//         initial='hidden'
//         animate={visible ? 'visible' : 'hidden'}
//         exit={'exit'}
//         transition={{ duration: 1 }}
//         onClick={() => setVisible(!visible)}
//         className='box'
//       />
//     </div>
//   )
// }

const boxVariants = {
  initial: {
    scale: 1,
    rotate: 0,
    skew: 0
  },
  hover: {
    scale: 1.2,
    rotata: 15,
    skew: '10deg',
    transition: {
      duration: 0.3
    }
  },
  click: {
    scale: 0.5,
    rotate: -15,
    transition: {
      duration: 0.3
    }
  }
}

function Variant() {
  return (
    <div>
      <motion.div
        className='w-40 h-40 bg-blue-500 rounded-lg'
        variants={boxVariants}
        initial='initial'
        whileHover={'hover'}
        whileTap={'click'}
      />
    </div>
  )
}

export default Variant
