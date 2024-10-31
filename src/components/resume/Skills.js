import React from 'react'
import { motion } from 'framer-motion'
const Skills = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:0.5}}}
    className='w-full flex gap-20'>
        {/* development */}
        <div className='w-1/2'>
            {/* title */}
            <div className='py-12 font-titleFont'>
                <p className='text-sm text-designColor tracking-[4px] uppercase'>Features</p>
                <h2 className='text-4xl font-bold'>Development Skills</h2>
            </div>
         {/* bars */}
            <div className='mt-6 w-full flex flex-col gap-2'>

                <div className='overflow-x-hidden'>
                <p className='text-sm uppercase font-medium'>HTML</p>
                <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                    <motion.span
                     initial={{x: "-100%", opacity: 0}}
                     animate={{x:0, opacity: 1}}
                     transition={{duration:0.5, delay:0.5}}
                     className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                        <span className='absolute -top-7 right-0'>100%</span>
                    </motion.span>
                </span>
                </div>

                <div className='overflow-x-hidden'>
                <p className='text-sm uppercase font-medium'>CSS</p>
                <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                    <motion.span
                     initial={{x: "-100%", opacity: 0}}
                     animate={{x:0, opacity: 1}}
                     transition={{duration:0.5, delay:0.5}}
                     className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                        <span className='absolute -top-7 right-0'>100%</span>
                    </motion.span>
                </span>
                </div>

                <div className='overflow-x-hidden'>
                <p className='text-sm uppercase font-medium'>JAVASCRIPT</p>
                <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                    <motion.span
                     initial={{x: "-100%", opacity: 0}}
                     animate={{x:0, opacity: 1}}
                     transition={{duration:0.5, delay:0.5}}
                     className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                        <span className='absolute -top-7 right-0'>100%</span>
                    </motion.span>
                </span>
                </div>

                <div className='overflow-x-hidden'>
                <p className='text-sm uppercase font-medium'>SQL</p>
                <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                    <motion.span
                     initial={{x: "-100%", opacity: 0}}
                     animate={{x:0, opacity: 1}}
                     transition={{duration:0.5, delay:0.5}}
                     className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                        <span className='absolute -top-7 right-0'>100%</span>
                    </motion.span>
                </span>
                </div>

                <div className='overflow-x-hidden'>
                <p className='text-sm uppercase font-medium'>MONGO DB</p>
                <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                    <motion.span
                     initial={{x: "-100%", opacity: 0}}
                     animate={{x:0, opacity: 1}}
                     transition={{duration:0.5, delay:0.5}}
                     className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                        <span className='absolute -top-7 right-0'>100%</span>
                    </motion.span>
                </span>
                </div>

                <div className='overflow-x-hidden'>
                <p className='text-sm uppercase font-medium'>EXPRESS JS</p>
                <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                    <motion.span
                     initial={{x: "-100%", opacity: 0}}
                     animate={{x:0, opacity: 1}}
                     transition={{duration:0.5, delay:0.5}}
                     className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                        <span className='absolute -top-7 right-0'>100%</span>
                    </motion.span>
                </span>
                </div>

                <div className='overflow-x-hidden'>
                <p className='text-sm uppercase font-medium'>NODE JS</p>
                <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                    <motion.span
                     initial={{x: "-100%", opacity: 0}}
                     animate={{x:0, opacity: 1}}
                     transition={{duration:0.5, delay:0.5}}
                     className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                        <span className='absolute -top-7 right-0'>100%</span>
                    </motion.span>
                </span>
                </div>

                <div className='overflow-x-hidden'>
                <p className='text-sm uppercase font-medium'>REACT JS</p>
                <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                    <motion.span
                     initial={{x: "-100%", opacity: 0}}
                     animate={{x:0, opacity: 1}}
                     transition={{duration:0.5, delay:0.5}}
                     className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                        <span className='absolute -top-7 right-0'>100%</span>
                    </motion.span>
                </span>
                </div>

                <div className='overflow-x-hidden'>
                <p className='text-sm uppercase font-medium'>TAILWIND CSS</p>
                <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                    <motion.span
                     initial={{x: "-100%", opacity: 0}}
                     animate={{x:0, opacity: 1}}
                     transition={{duration:0.5, delay:0.5}}
                     className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                        <span className='absolute -top-7 right-0'>90%</span>
                    </motion.span>
                </span>
                </div>

                <div className='overflow-x-hidden'>
                <p className='text-sm uppercase font-medium'>FRAMER MOTION</p>
                <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                    <motion.span
                     initial={{x: "-100%", opacity: 0}}
                     animate={{x:0, opacity: 1}}
                     transition={{duration:0.5, delay:0.5}}
                     className='w-[50%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                        <span className='absolute -top-7 right-0'>50%</span>
                    </motion.span>
                </span>
                </div>

            </div>
                {/* bars div close */}
        </div>
            {/* development div close */}


        {/* programming */}
        <div className='w-1/2'>
            {/* title */}
            <div className='py-12 font-titleFont'>
                <p className='text-sm text-designColor tracking-[4px] uppercase'>Features</p>
                <h2 className='text-4xl font-bold'>Programming Skills</h2>
            </div>
            {/* bars */}
            <div className='mt-6 w-full flex flex-col gap-2'>

                    <div className='overflow-x-hidden'>
                    <p className='text-sm uppercase font-medium'>C</p>
                    <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                        <motion.span
                        initial={{x: "-100%", opacity: 0}}
                        animate={{x:0, opacity: 1}}
                        transition={{duration:0.5, delay:0.5}}
                        className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                            <span className='absolute -top-7 right-0'>100%</span>
                        </motion.span>
                    </span>
                    </div>

                    <div className='overflow-x-hidden'>
                    <p className='text-sm uppercase font-medium'>C++</p>
                    <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                        <motion.span
                        initial={{x: "-100%", opacity: 0}}
                        animate={{x:0, opacity: 1}}
                        transition={{duration:0.5, delay:0.5}}
                        className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                            <span className='absolute -top-7 right-0'>100%</span>
                        </motion.span>
                    </span>
                    </div>

                    <div className='overflow-x-hidden'>
                    <p className='text-sm uppercase font-medium'>JAVA</p>
                    <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                        <motion.span
                        initial={{x: "-100%", opacity: 0}}
                        animate={{x:0, opacity: 1}}
                        transition={{duration:0.5, delay:0.5}}
                        className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                            <span className='absolute -top-7 right-0'>100%</span>
                        </motion.span>
                    </span>
                    </div>

                    <div className='overflow-x-hidden'>
                    <p className='text-sm uppercase font-medium'>Object Oriented Programming</p>
                    <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                        <motion.span
                        initial={{x: "-100%", opacity: 0}}
                        animate={{x:0, opacity: 1}}
                        transition={{duration:0.5, delay:0.5}}
                        className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                            <span className='absolute -top-7 right-0'>100%</span>
                        </motion.span>
                    </span>
                    </div>

                    <div className='overflow-x-hidden'>
                    <p className='text-sm uppercase font-medium'>Data Structures And Algorithms</p>
                    <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                        <motion.span
                        initial={{x: "-100%", opacity: 0}}
                        animate={{x:0, opacity: 1}}
                        transition={{duration:0.5, delay:0.5}}
                        className='w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                            <span className='absolute -top-7 right-0'>80%</span>
                        </motion.span>
                    </span>
                    </div>


            </div>
                {/* bars div clode */}
        </div>
        {/* programming div close */}
    </motion.div>
  )
}

export default Skills
