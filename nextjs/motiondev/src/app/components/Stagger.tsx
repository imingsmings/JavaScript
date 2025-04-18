import * as motion from 'motion/react-client'

const parentVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8
    }
  }
}

const childVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0
  }
}

function Stagger() {
  return (
    <div>
      <motion.div
        variants={parentVariant}
        initial='hidden'
        animate='visible'
        className='flex space-x-4'
      >
        {Array.from({ length: 5 }).map((_, index) => {
          return (
            <motion.div
              key={index}
              variants={childVariants}
              className='box'
            ></motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default Stagger
