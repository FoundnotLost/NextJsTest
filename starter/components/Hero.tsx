import Link from 'next/link';
import React from 'react'
import { useTypewriter, Cursor} from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';

type Props = {}

function Hero({}: Props) {
  const [text, count] = useTypewriter ({
    words: [
        "Hello, My name is Jason Madruga",
        "Guy-who-loves-puzzles.tsx", 
        "<CodesWithPassion />"],
        loop: true,
        delaySpeed: 2300,
        
  });

    return (
    <div className='h-screen flex flex-col space-y-8 items-center  justify-center text-center overflow-hidden object-cover'>
        <BackgroundCircles />
        <img
        className='relative rounded-full h-32 w-32 mx-auto' 
        src='https://media.licdn.com/dms/image/C5603AQH0m65SrbAAFA/profile-displayphoto-shrink_800_800/0/1516482370017?e=1672876800&v=beta&t=9tiiR-kGeyp9bkH_7AJ4zqhS578ZBCFuP7iu5jXfNmk' />
        <div className='z-20'>
          <h2 className='text-sm uppercase text-purple-500 pb-2 tracking-[10px]'>Software Developer</h2>
          <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='gray' />
          </h1>
          <div className='pt-5'>
            <Link href="#about">
            <button className='heroButton'>About</button>
            </Link>
            <Link href="#experience">
            <button className='heroButton'>Experience</button>
            </Link>
            <Link href="#skills">
            <button className='heroButton'>Skills</button>
            </Link>
            <Link href="#projects">
            <button className='heroButton'>Projects</button>
            </Link>

          </div>
        </div>
    </div>
  )
}

export default Hero