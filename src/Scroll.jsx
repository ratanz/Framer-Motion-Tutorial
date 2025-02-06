import React from 'react'
import { motion, useScroll } from 'framer-motion'

const Scroll = () => {

    const scrollYProgress = useScroll().scrollYProgress

  return (
    <div className='p-20 text-center font-mono'>

        <motion.div className='bg-red-500 origin-left w-full h-2 fixed top-0 left-0'
        style={{
            scaleX: scrollYProgress
        }}
        >

        </motion.div>

      <h2 className='text-2xl font-bold mb-8'>
        Scroll down to see the magic
        <p className='mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure non perspiciatis velit error, commodi, corrupti omnis facilis quod impedit asperiores explicabo, ex voluptate harum deserunt id! Est obcaecati repellendus officiis reprehenderit minima? Exercitationem magni veritatis explicabo reprehenderit expedita aperiam nemo obcaecati alias provident. Impedit est tempore molestiae incidunt suscipit.</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti cum tenetur suscipit incidunt delectus nobis aliquam repudiandae provident, esse soluta!</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quis laboriosam necessitatibus esse harum, mollitia ab a, possimus ad dolorum placeat iste non qui nostrum quibusdam neque, labore doloribus sapiente? Recusandae iure, maiores aperiam necessitatibus omnis totam esse quisquam quas sint, libero ab ipsum nesciunt quia nam consequatur molestiae assumenda, minima vel minus modi? Numquam, placeat omnis officia possimus qui animi esse nam repudiandae minus eveniet error harum accusamus a eligendi hic. Consequatur dignissimos placeat consequuntur, excepturi eaque facilis hic temporibus fugit nihil, sequi, natus minima eos. Reiciendis perspiciatis, suscipit quisquam voluptate voluptates accusamus nostrum et eius obcaecati dolore deleniti similique illum facere sapiente maxime iste repellat quo aut earum totam pariatur, fugit, ipsum perferendis debitis? Modi facere deserunt sint nobis cupiditate fugiat impedit illo rerum officiis sit recusandae nostrum autem eos omnis non, nihil repellendus voluptatem at, nisi nam inventore illum. Nulla magnam, quam iure dolorem minima ipsum quibusdam eos cupiditate officiis ex labore laudantium deleniti saepe odit, natus, rem quidem delectus molestias! Magni repudiandae eaque cumque autem consequuntur assumenda repellendus blanditiis exercitationem cum consequatur obcaecati culpa, aspernatur hic commodi similique quibusdam aliquid, nostrum ipsa quaerat nesciunt quam molestiae facere! Ratione optio dolorem officiis cupiditate, eaque quaerat? Eaque, saepe!</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quis laboriosam necessitatibus esse harum, mollitia ab a, possimus ad dolorum placeat iste non qui nostrum quibusdam neque, labore doloribus sapiente? Recusandae iure, maiores aperiam necessitatibus omnis totam esse quisquam quas sint, libero ab ipsum nesciunt quia nam consequatur molestiae assumenda, minima vel minus modi? Numquam, placeat omnis officia possimus qui animi esse nam repudiandae minus eveniet error harum accusamus a eligendi hic. Consequatur dignissimos placeat consequuntur, excepturi eaque facilis hic temporibus fugit nihil, sequi, natus minima eos. Reiciendis perspiciatis, suscipit quisquam voluptate voluptates accusamus nostrum et eius obcaecati dolore deleniti similique illum facere sapiente maxime iste repellat quo aut earum totam pariatur, fugit, ipsum perferendis debitis? Modi facere deserunt sint nobis cupiditate fugiat impedit illo rerum officiis sit recusandae nostrum autem eos omnis non, nihil repellendus voluptatem at, nisi nam inventore illum. Nulla magnam, quam iure dolorem minima ipsum quibusdam eos cupiditate officiis ex labore laudantium deleniti saepe odit, natus, rem quidem delectus molestias! Magni repudiandae eaque cumque autem consequuntur assumenda repellendus blanditiis exercitationem cum consequatur obcaecati culpa, aspernatur hic commodi similique quibusdam aliquid, nostrum ipsa quaerat nesciunt quam molestiae facere! Ratione optio dolorem officiis cupiditate, eaque quaerat? Eaque, saepe!</p>
      </h2>
    </div>
  )
}

export default Scroll
