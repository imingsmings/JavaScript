import * as motion from 'motion/react-client'

export default function App() {
  return (
    <div>
      <motion.div
        className='box'
        animate={{
          x: -50,
          y: -50
        }}
      />
      <motion.div
        className='box'
        animate={{
          // rotateX: 30
          // rotateY: 30
          rotate: 30
        }}
      />
      <motion.div
        className='box'
        animate={{
          // scaleX: 2,
          // scaleY: 2,
          scale: 1.5
        }}
      />
      <motion.div
        className='box'
        animate={{
          // skewX: 20,
          // skewY: 20,
          skew: 20
        }}
      />
    </div>
  )
}
