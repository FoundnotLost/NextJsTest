import React from 'react'
import { motion } from "framer-motion";
import ExpCard from './ExpCard';

type Props = {}

const Experience = (props: Props) => {
  return (
    <motion.div 
    initial={{ opacity: 0, }}
    transition={{ duration: 2.5 }}
    whileInView={{ opacity: 1, }}
    className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row 
    max-w-full px-10 justify-evenly mx-auto items-center'>

        <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl text-cyan-400'>Experience</h3>

    <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-250 overflow-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-cyan-400' >
        <ExpCard />
        <ExpCard />
        <ExpCard />
        <ExpCard />
    </div>    
    </motion.div>
  )
}

export default Experience
