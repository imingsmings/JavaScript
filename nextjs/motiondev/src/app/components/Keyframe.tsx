import * as motion from 'motion/react-client'

// spliting animation into multiple frames
function Keyframe() {
  return (
    <div>
      {/* <motion.div
        className='box'
        animate={{
          scale: [1, 2, 3, 2, 1],
          rotate: [0, 270, 0],
          borderRadius: ['20%', '50%', '20%']
        }}
        transition={{
          duration: 2
        }}
      ></motion.div> */}
      {/* <motion.button
        className='px-4 py-2 text-white bg-blue-500 rounded outline-none'
        animate={{
          scale: [1, 1.1, 1],
          backgroundColor: ['#3b82f6', '#60a5fa', '#3b82f6']
        }}
        transition={{
          duration: 0.8,
          ease: 'easeInOut',
          repeat: Infinity
        }}
      >
        Click Me
      </motion.button> */}
      <div className='flex space-x-2'>
        {Array.from({ length: 3 }).map((_, index) => {
          return (
            <motion.div
              key={index}
              className='w-8 h-8 bg-teal-500 rounded-full'
              animate={{
                y: [0, -15, 0]
              }}
              transition={{
                duration: 0.6,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: index * 0.2
              }}
            ></motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Keyframe
