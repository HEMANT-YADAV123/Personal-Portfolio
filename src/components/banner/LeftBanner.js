import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaFacebookF, FaInstagram, FaLinkedin, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiNodedotjs } from "react-icons/si";


const LeftBanner = () => {

    const [text] = useTypewriter({
        words: ['Professional Coder,', 'Full Stack Developer.', 'UI/UX Designer.'],
        loop:true,
        typeSpeed:20,
        deleteSpeed:20,
        delaySpeed:2000
      });

  return (
    // left div 
<div className='w-1/2 flex flex-col gap-20'>
    <div className='flex flex-col gap-5'>
        <h4 className='text-lg font-normal'>WELCOME TO MY WORLD</h4>
        <h1 className='text-5xl font-bold text-white'>
          Hi, I'm {" "}
          <span className="text-designColor capitalize">Hemant Yadav</span>
        </h1>

        <h2 className='text-3xl font-bold text-white'>a <span>{text}</span>
        <Cursor 
        cursorBlinking="false"
        cursorStyle="|"
        cursorColor='#ff014f'
        />
        </h2>

                        {/*leading is used to control the line height btw any two lines.*/}
        <p className='text-base font-bodyFont leading-6 tracking-wide'>
        I am a passionate web developer specializing in full-stack websites using modern technologies. I create responsive, user-friendly applications, ensuring seamless integration from development to production with a focus on clean code and efficient design.
        </p>
    </div>

    {/* for icons */}
    <div className='flex justify-between'>

      <div>
        <h2 className='text-base uppercase font-titleFont mb-5'>
          Find in me
        </h2>

        <div className='flex gap-4'>
            <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className='bannerIcon'>
                <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/in/hemant-yadav-88b100258/" target="_blank" rel="noopener noreferrer" className='bannerIcon'>
                <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/i_hemant.yadav/?next=%2F" target="_blank" rel="noopener noreferrer" className='bannerIcon'>
                <FaInstagram />
            </a>
        </div>
      </div>

      <div>
      <h2 className='text-base uppercase font-titleFont mb-5'>
          BEST SKILLS ON
        </h2>

        <div className='flex gap-4'>
              <span className='bannerIcon'>
                  <SiJavascript />
              </span>
              <span className='bannerIcon'>
                  <SiNodedotjs/>
              </span>
              <span className='bannerIcon'>
                  <SiTailwindcss/>
              </span>
              <span className='bannerIcon'>
                  <FaReact/>
              </span>
        </div>
      </div>

    </div>
</div>

  )
}

export default LeftBanner
