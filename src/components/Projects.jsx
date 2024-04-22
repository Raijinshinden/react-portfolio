import React from 'react'
import ProjectItem from './ProjectItem'
import gymImg from '../assets/gym.jpg'
import shopImg from '../assets/shop.jpg'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, rem quibusdam amet deleniti deserunt cum cumque error porro id voluptates eveniet sequi fugiat voluptatibus. Vero sunt unde asperiores nam quidem?
        </p>
        <div className='grid sm:grid-cols-2 gap-12'> 
            <ProjectItem img={} title='Gym Website' />  
            <ProjectItem img={} title='Shopping Website' />
        </div>
    </div>
  )
}

export default Projects