import React from 'react'
import { motion } from 'framer-motion'


type Props = {}

function Projects({}: Props) {
    const projects = [1, 2, 3, 4, 5];
    return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1.5}}
    className='h-screen relative flex overflow-hidden flew-col text-left md:flex-row 
    max-w-full justify-evenly mx-auto item-center z-0'>
        
        <h3 className='absolute top-24 uppercase tracking-[20px] 
        text-2xl text-cyan-400'>
            Projects
        </h3>

        <div className='relative w-full flex overflow-x-scroll
         overflow-y-hidden snap-x snap-mandatory z-20
          scrollbar-track-gray-400 scrollbar-thumb-cyan-400'>

            {projects.map ((project, i) => (
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'> 
                    <motion.img
                    initial={{
                        y: -300,
                        opacity: 0
                        }}
                    transition={{ duration: 1.2}}
                    whileInView={{ opacity: 1, y: 0}}
                    viewport={{ once: true }}

                    src='https://media.licdn.com/dms/image/C5603AQH0m65SrbAAFA/profile-displayphoto-shrink_800_800/0/1516482370017?e=1672876800&v=beta&t=9tiiR-kGeyp9bkH_7AJ4zqhS578ZBCFuP7iu5jXfNmk' 
                    alt='' 
                    />

                    <div className='space-y-10 px-0 md:px-10 max-w-5xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50'>
                                Case Study {i + 1} of {projects.length}:</span> {''}
                                CloneS
                        </h4>
                        <p className='text-lg text-center md:left'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam cumque rerum praesentium nihil natus. Eum quisquam ea, accusantium culpa odio necessitatibus enim, laborum accusamus tempora ipsam, reiciendis corrupti eaque molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ratione doloribus velit voluptatem. Alias fugiat hic ab, temporibus dolore nesciunt rerum iste enim molestias nisi maxime, quis, impedit labore cumque.</p>
                    </div>
                </div>
            ))}
            
        </div>

        <div className='w-full absolute top-[30%] bg-[#7127f0] left-0 h-[500px] -skew-y-12' />
    </motion.div>
  )
}

export default Projects