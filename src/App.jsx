import React from 'react'
import { motion } from 'framer-motion'

const App = () => {



  return (
    <div>
      <motion.div className='box'
        animate={{
          x: 500,
          y: 200,
          rotate: 360,

        }}
        transition={{
          duration: 3,
          ease: 'easeInOut',
          delay: 1,
      
        }}
      >
      </motion.div>

      {/* <motion.div 
      className='circle'
      animate={{
        x: 440,
        rotate: 160,
        scale: 0.5
      }}
      >
      </motion.div> */}
    </div>
  )
}

export default App
