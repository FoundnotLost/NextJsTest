import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function ExpCard({}: Props) {
  return (
<article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600] xl:w-[900] snap-center bg-slate-600'>
    <motion.img 
    initial={{
        y: -100,
        opacity: 0,
    }}
    transition={{
        duration: 1.2
    }}
    whileInView={{
        opacity: 1, y: 0
    }}
    viewport={{ once: true}}
    className='w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-top pt-3'
    src='https://play-lh.googleusercontent.com/CrxYouhmKs6LCEkKbIgFATmXZkL9x5kZY1oxXb2PNCe_tou3_uLATCRU_VC2LWFQacg=w600-h300-pc0xffffff-pd' alt='Cargill Logo' />
   
   <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Executive Support Analyist</h4>
        <p className='font-bold text-2xl mt-1'>Cargill/TCS</p>
    <div className='flex space-x-2 my-2'>
        <img
        className='h-10 w-10 rounded-full' src='https://as1.ftcdn.net/v2/jpg/03/36/78/12/1000_F_336781293_qeEZVuqvghmmf5nT5Ccgg9FeAvIX10Oi.jpg' />
            <img
        className='h-10 w-10 rounded-full' src='https://as1.ftcdn.net/v2/jpg/03/36/78/12/1000_F_336781293_qeEZVuqvghmmf5nT5Ccgg9FeAvIX10Oi.jpg' />
        <img
        className='h-10 w-10 rounded-full' src='https://as1.ftcdn.net/v2/jpg/03/36/78/12/1000_F_336781293_qeEZVuqvghmmf5nT5Ccgg9FeAvIX10Oi.jpg' />
    </div>

    </div>
        <p className='uppercase py-5 text-gray-400'>2018 - Current</p>
    <div>
    <ul className='list-disc space-y-4 ml-5 text-lg pb-4'>
        <li>Summary points</li>
        <li>Summary points</li>
        <li>Summary points</li>
        <li>Summary points</li> 
        <li>Summary points</li>
    </ul>
    
    </div>


</article>
  )
}

export default ExpCard