import React from 'react'
import ResumeCard from './ResumeCard'
import { motion } from 'framer-motion'

const Education = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:0.5}}} className='w-full flex gap-16'>
            <div>
                {/* Education Section */}
                <div className='py-12 font-titleFont gap-6'>
                    <p className='text-sm text-designColor tracking-[4px]'>2019 - 2024(CURRENTLY)</p>
                    <h2 className='text-4xl font-bold'> Education Qualification</h2>
                </div>

                {/* Card */}
                <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>

                    <ResumeCard
                    title = 'Bachelor of Technology in Computer Science and Engineering'
                    subTitle = 'Guru Jambheshwar University of Science and Technology, Hisar(2022 - CURRENTLY)'
                    result = '7.2/10(CGPA)'
                    desc = 'Currently pursuing a Bachelor of Technology in Computer Science and Engineering (2022-2026) with a CGPA of 7.2, building expertise in software development, algorithms, and full-stack web applications.'
                    />
                    <ResumeCard
                    title = 'Senior Secondary Education'
                    subTitle = 'St. Xavier School,Behror(Rajasthan) (2021)'
                    result = '84.8%'
                    desc = 'Scored 84.8% in the Class 12 CBSE Examination, with a focus on Science and Mathematics.'
                    />
                    <ResumeCard
                    title = 'Secondary Education'
                    subTitle = 'St. Xavier School,Behror(Rajasthan) (2019)'
                    result = '90.4%'
                    desc = 'Achieved 90.4% in the Class 10 CBSE Examination, demonstrating a strong foundation in core subjects.'
                    />
                    
                </div>
            </div>

            {/* Job Section */}
            <div>
                {/* Education Section */}
                <div className='py-12 font-titleFont gap-4'>
                    <p className='text-sm text-designColor tracking-[4px]'>Currently in B.Tech(3rd Year)</p>
                    <h2 className='text-4xl font-bold'> Job Experience</h2>
                </div>

                {/* Card */}
                <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>

                    <ResumeCard
                    title = 'OPEN FOR WORK'
                    subTitle = 'Fresher'
                    desc = 'Completed MERN Stack Development and Data Structures & Algorithms in Java. Eager to apply my skills in full-stack development and contribute to innovative web applications.'
                    />
                    
                </div>
            </div>

        </motion.div>
  )
}

export default Education
