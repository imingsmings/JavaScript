'use client'
import { motion, useScroll, useTransform } from 'motion/react'

// function ScrollTrigger() {
//   return (
//     <div className='flex justify-center items-start mt-[100rem]'>
//       <div className='h-[200vh] w-full flex justify-center items-center'>
//         <motion.div
//           className='bg-white rounded-lg p-6 shadow-lg text-center'
//           initial={{ scale: 0.5, opacity: 0 }}
//           whileInView={{
//             scale: 1.2,
//             opacity: 1,
//             y: 200
//           }}
//           transition={{ duration: 1 }}
//         >
//           <h2 className='text-2xl font-bold mb-2 text-back'>Amazing Card</h2>
//           <p className='text-gray-500'>This card animates beautifully into view</p>
//         </motion.div>
//       </div>
//     </div>
//   )
// }

// const boxes = Array.from({ length: 6 }, (_, index) => index + 1)
// function ScrollTrigger() {
//   return (
//     <div className='flex flex-col justify-center items-center text-white mt-[200rem]'>
//       <h1>Scroll To Animate</h1>
//       <div className='flex flex-col'>
//         {boxes.map((box) => {
//           return (
//             <motion.div
//               key={box}
//               className='w-32 h-32 bg-blue-600 mb-6 rounded-lg flex items-center justify-center'
//               initial={{ opacity: 0, scale: 0.5 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, ease: 'easeInOut' }}
//             >
//               Box {box}
//             </motion.div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

function ScrollTrigger() {
  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [0, 300], [1, 1.5])
  const opacity = useTransform(scrollY, [0, 100], [1, 0])

  return (
    <div className='h-screen flex items-center justify-center'>
      <motion.div
        className='bg-blue-500 w-32 h-32 rounded-lg shadow-lg'
        style={{
          scale,
          opacity
        }}
      ></motion.div>
      <div className='h-[150vh] w-full'></div>
    </div>
  )
}

export default ScrollTrigger
