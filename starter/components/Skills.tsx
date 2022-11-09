import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div 
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1.75}}
    className='min-h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 
    justify-center xl:space-y-0 mx-auto items-center'>
        
        <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl text-cyan-400'>
        Skills
        </h3>
        <h3 className='absolute top-36 tracking-[3px] text-gray-400 text-sm '>Hover over for current skill proficiency</h3>
<div className='grid grid-cols-4 gap-5'>
    <Skill />
    <Skill />
    <Skill />
    <Skill />
    <Skill />
    <Skill />
    <Skill />
    <Skill />
</div>
    
    </motion.div>
  )
}

export default Skills