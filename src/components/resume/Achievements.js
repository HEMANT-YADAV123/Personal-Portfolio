import React from 'react'
import { motion } from 'framer-motion'
import Title from '../Layouts/Title'
import ResumeCard from './ResumeCard'
const Achievements = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:0.5}}}>
      {/* heading */}
      <div className='flex justify-center items-center text-center mt-10'>
          <Title
            title=''
            des='ACHIEVEMENTS'
          />
      </div>


       {/* Card */}
       <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>

          <ResumeCard
          title='Training And Placement Cell Coordinator'
          subTitle='Appointed as training and placement cell coordinator in my B.tech(3rd year)'
          result='Sucess'
          desc='Responsible for facilitating communication between students and potential employers, organizing placement drives, and coordinating training sessions. Developed strong teamwork, communication, and organizational skills through active engagement in student placement activities.'
          />
        </div>


    </motion.div>
  )
}

export default Achievements
