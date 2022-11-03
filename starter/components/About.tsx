import React from 'react'
import { motion } from 'framer-motion';
type Props = {}

function About({}: Props) {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-cyan-400 text-2xl'>
            About
        </h3>
        <motion.img
     initial={{
        x: -200,
        opacity: 0,
    }}
    transition={{
        duration: 1.5
    }}
    whileInView={{
        opacity:1, 
        x: 0
    }}
   

        src='https://media.licdn.com/dms/image/C5603AQH0m65SrbAAFA/profile-displayphoto-shrink_800_800/0/1516482370017?e=1672876800&v=beta&t=9tiiR-kGeyp9bkH_7AJ4zqhS578ZBCFuP7iu5jXfNmk'
        className='-mb-20 md:md-0 flex-shrink-0 w-56 h-56 rounded-full object-cover'
    />
    
    </div>
  )
}

export default About
