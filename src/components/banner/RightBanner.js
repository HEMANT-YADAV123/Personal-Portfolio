import React from 'react'
import {bannerImg} from '../../assets/index.js'

const RightBanner = () => {

  return (
    // {/*Right div  */}

    <div className='w-1/2 ml-10 flex justify-center items-center relative'>
    <img className='w-[500px] h-[680px] z-10 -mt-60' src={bannerImg} alt="" />

      <div className='absolute bottom-0 w-[480px] h-[400px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center -mb-9'>

      </div>

    </div>

  )
}

export default RightBanner
