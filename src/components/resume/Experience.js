import React from 'react'
import Title from '../Layouts/Title'
import { motion } from 'framer-motion'
import ResumeCard from './ResumeCard'
const Experience = () => {
  return (
    
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:0.5}}}>
      <div>
        {/* heading */}
        <div className='flex justify-center items-center text-center mt-10'>
          <Title
            title='CURRENTLY IN MY B.TECH(3rd YEAR)'
            des='No prior internship/jobs'
          />
        </div>

          {/* Card */}
          <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>

              <ResumeCard
              title='MERN Stack Developer'
              subTitle='Completed MERN Stack Development, Open to Full-Stack Opportunities'
              result=''
              desc='Skilled in building responsive, full-stack applications with a focus on user experience and performance. Developed projects demonstrating expertise in frontend and backend integration, including a Spotify clone and other dynamic web applications.'
              />
        </div>
      </div>
    </motion.div>
  )
}

export default Experience