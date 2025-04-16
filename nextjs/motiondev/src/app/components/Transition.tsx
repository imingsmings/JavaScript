import * as motion from 'motion/react-client'

function Transition() {
  return (
    <div>
      <motion.div
        className='box'
        initial={{ x: 0 }}
        animate={{ x: 100 }}
        transition={{
          // delay: 2
          duration: 2,
          ease: 'easeIn'
        }}
      />
    </div>
  )
}

export default Transition
