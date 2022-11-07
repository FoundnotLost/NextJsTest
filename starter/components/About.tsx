import React from 'react'
import { motion } from 'framer-motion';
type Props = {}

function About({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0, }}
    transition={{ duration: 2.5 }}
    whileInView={{ opacity: 1, }}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
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
    viewport= {{
        once: true
    }}
   

        src='https://media.licdn.com/dms/image/C5603AQH0m65SrbAAFA/profile-displayphoto-shrink_800_800/0/1516482370017?e=1672876800&v=beta&t=9tiiR-kGeyp9bkH_7AJ4zqhS578ZBCFuP7iu5jXfNmk'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
    />
    <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-simibold'>Here is a little background</h4>
        <p text-sm> Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, consectetur reiciendis quos fugit, culpa sequi distinctio exercitationem nulla sapiente alias harum voluptatibus nemo, similique nobis error iusto nihil accusamus quibusdam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit est et, at dignissimos corrupti delectus incidunt temporibus reiciendis sit non sed voluptatibus accusantium tenetur nostrum architecto neque pariatur harum?</p>
    </div>

    </motion.div>
  )
}

export default About
