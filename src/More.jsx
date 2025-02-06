import React from 'react'
import {color, motion} from 'framer-motion'

const More = () => {
  return (
    <motion.div
        className='box-2'
       
        animate= { {
                x: 777,
                y: 15,
                scale: 1,
        }}
        transition={{
            duration: 2,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "anticipate",
        }}
        whileHover={{
            backgroundColor: 'green',  
        }}
        whileTap={{ 
            scale: 0.5,
            backgroundColor: 'red',
        }}
        drag
        whileDrag={{
            scale: 1.2,
            backgroundColor: 'yellow',
        }}
        dragConstraints={{
            top: 0,
            left: 0,
            right: 1000,
            bottom: 500,
        }}
        dragElastic={0.5}
        dragMomentum={true}
    >
      
    </motion.div>
  )
}

export default More
