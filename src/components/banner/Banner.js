import React from 'react'
import LeftBanner from './LeftBanner'
import RightBanner from './RightBanner';


function Banner() {

  return (
    <section id='home' className='w-full pt-14 pb-20 flex items-center font-titleFont border-b-[1px] border-b-black'>
      {/* Left Banner */}
        <LeftBanner/>                                    

      {/* Right Banner */}
    <RightBanner/>        

    </section>
  );
}

export default Banner