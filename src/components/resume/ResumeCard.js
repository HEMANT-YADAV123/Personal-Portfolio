import React from 'react'

const ResumeCard = ({title , subTitle , desc , result}) => {
  return (
    <div className='w-full h-1/3 group flex'>
        {/* left side (before card) */}
      <div className='w-10 h-[6px] bgOpacity mt-16 relative'>
        {/* circle */}
            <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60'>
                {/* circle ke ander vala khai circle */}
            <span className='w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300'></span>
            </span>
      </div>
        {/* Main card */}
      <div className='w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg px-10 flex flex-col justify-center gap-10 shadow-shadowOne'>
            
            <div className='flex justify-between items-center'>
                {/* title and subtitle */}
                <div>
                <h3 className='text-xl font-semibold group-hover:text-white duration-300'>{title}</h3>
                <p className='text-sm mt-2 text-gray-400 group-hover:text-white duration-300'>{subTitle}</p>
                </div>
                {/* result */}
                <div>
                    <p className='w-24 h-10 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium'>
                        {result}
                    </p>
                </div>
            </div>
            {/* description */}
            <p className='text-base font-normal text-gray-400 group-hover:text-gray-300 duration-300'>{desc}</p>
      </div>
    </div>
  )
}

export default ResumeCard