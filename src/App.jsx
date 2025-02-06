import React from 'react'
import { motion } from 'framer-motion'

const App = () => {



  return (
    <div>
      <motion.div className='box'
        initial={{
          x: 10,
          y: 20,
          rotate: 0,
        }}

        animate={{
          x: [0, 400, 700, 40],
          y: 200,
          rotate: 360,

        }}
        transition={{
          duration: 3,
          delay: 1,
          repeat: Infinity,
          ease: "anticipate",
          repeatType: "reverse",
        }}
      >
      </motion.div>

      <motion.h1
        className='text'
        animate={{
          x: 0,
          scale: 3
        }}
        transition={{
          duration: 3,
          ease: 'easeInOut',
          delay: 1,
        }}
      >
        Pookie
      </motion.h1>

        <motion.h2
        className='text-2'
        initial={{
          x: 300,
          y: 200,
          rotate: 0,
          opacity: 0,
        }}
        animate={{
          x: 50,
          y: 20,
          opacity: 1,
          scale: 3,
        }}
        transition={{
          duration: 3,
          ease: 'easeInOut',
          delay: 1,
        }}
        >
          is sooo cutieee 
          </motion.h2>

    </div>
  )
}

export default App
