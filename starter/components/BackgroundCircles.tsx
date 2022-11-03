import React from 'react'
import { motion } from "framer-motion";

type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
    initial={{
        opacity: 0,
    }}
    animate={{
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        scale: [1, 2, 2, 3, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],

    }}
    transition={{
        duration: 1.5
    }}
    
   
    className='relative flex justify-center items-center mt-52'
    >
       <div className='absolute border border-purple-300 rounded-full h-[200px] w-[200px]  opacity-15 mt-52 animate-ping'/>
       <div className='absolute border border-purple-400 rounded-full h-[300px] w-[300px] opacity-20 mt-52 '/>
       <div className='absolute border border-purple-300 rounded-full h-[500px] w-[500px] opacity-20 mt-52 '/>
       <div className='absolute border border-cyan-300 rounded-full  opacity-20 h-[650px] w-[650px] mt-52 animate-pulse'/>
       <div className='absolute border border-purple-300 rounded-full h-[800px] w-[800px] opacity-20 mt-52'/>
    </motion.div>
  )
}

export default BackgroundCircles;