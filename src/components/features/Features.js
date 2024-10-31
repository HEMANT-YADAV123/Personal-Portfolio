import React from 'react'
import Title from '../Layouts/Title'
import Card from './Card'
import {AiFillCode,AiFillLayout,AiFillInteraction,AiFillSignal,AiFillEdit} from 'react-icons/ai';
// import { FaBars } from 'react-icons/fa';

function Features() {
  return (
    <section 
      id='features' 
      className='w-full py-20 border-b-[1px] border-b-black'>

     <div className='flex justify-center items-center text-center'>
        <Title 
        title="Features" 
        des="What I do"/>
      </div> 
        <div className='grid grid-cols-3 gap-20'>
              <Card
                title="Web Development"
                des="Building responsive, high-performance websites using modern frameworks and tools."
                icon={<AiFillCode />}  
              />
              <Card
                title="UI Design"
                des="Creating visually appealing and intuitive user interfaces that enhance the user experience."
                icon={<AiFillLayout />}  
              />
              <Card
                title="UX Design"
                des="Designing seamless and user-centered experiences that meet user needs and business goals."
                icon={<AiFillInteraction />} 
              />
              <Card
                title="SEO Optimization"
                des="Improving website visibility on search engines to drive organic traffic and improve rankings."
                icon={<AiFillSignal />}  
              />
              <Card
                title="Content Management"
                des="Creating and managing dynamic website content using CMS platforms like WordPress."
                icon={<AiFillEdit />}  
              />
        </div>
    </section>  
  )
}

export default Features
