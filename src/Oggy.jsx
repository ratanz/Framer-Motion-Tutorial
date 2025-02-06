import React from 'react'
import { motion } from 'framer-motion'

const Oggy = () => {
  return (
    <div>
      <div>
        <motion.img
        initial={{
            x : 20,
            y: 20,
        }
        } 
        animate={{
          x: 600,
          y: 40,
        }}
        transition={{
          duration: 2,
          ease: 'anticipate',
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2,
        }}

        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bb22d44a-cf93-446d-8ec4-9602323a0725/dfvnf27-961dcb5c-5b01-46db-9d25-4b0075efbed9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JiMjJkNDRhLWNmOTMtNDQ2ZC04ZWM0LTk2MDIzMjNhMDcyNVwvZGZ2bmYyNy05NjFkY2I1Yy01YjAxLTQ2ZGItOWQyNS00YjAwNzVlZmJlZDkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0EfPmuMyPDzGkKLiypAQbCy9cyXwpZFEflEyA_5uwv8" alt="" />
      </div>
    </div>
  )
}

export default Oggy
