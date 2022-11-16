import { GetStaticProps } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import WorkExperience from '../components/WorkExperience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchPageInfo } from '../utils/fetchPagInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchExperience } from '../utils/fetchExperience'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocial } from '../utils/fetchSocials'


type Props ={
  pageInfo: PageInfo;
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36,36)] text-white h-screen 
    snap-y snap-center snap-mandatory overflow-y-scroll overflow-scroll-x-hidden
     z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-cyan-400'>
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
  <WorkExperience />
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

export const getStaticProps: GetStaticProps <Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experience: Experience[] = await fetchExperience();
  const projects: Project[] = await fetchProjects();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocial();

}