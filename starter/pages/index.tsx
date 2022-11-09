import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'

import Skills from '../components/Skills'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36,36)] text-white h-screen snap-y snap-center snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Jason's Portfolio</title>
      </Head>

      <Header /> 


  <section id='hero' className='snap-start'>
    <Hero />
  </section> 

<section id='about' className='snap-center'>
  <About />
</section>

{/* when done change to work experoence*/}
<section id='experience' className='snap-center'>
  <Experience />
</section>

<section id='skills' className='snap-start'>
  <Skills />
</section>

<section id='projects' className='snap-start'>
<Projects />
</section>

<section id='contact' className='snap-start'>
  <Contact />
</section>


  
  
  
   </div>
  )
}
