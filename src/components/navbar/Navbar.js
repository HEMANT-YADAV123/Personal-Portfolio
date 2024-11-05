import React from 'react'
import {logo} from '../../assets/index'
import {Link} from 'react-scroll'
import {navLinksdata} from '../../constants/index.js'
const Navbar = () => {
  return (
    <div className='w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center border-b-[1px] border-b-gray-600'>

      <div>
        <img src={logo} alt="logo" className='h-28 w-28'/>
      </div>

      <div>
        <ul className='flex items-center gap-10'>
            {
                // non destructured form.
                // navLinksdata.map((navlink)=>
                // {
                //     return(
                //         <li key={navlink._id}>{navlink.title}</li>
                //     ) 
                // })

                // de-structured form
                navLinksdata.map(({_id,title,link})=>
                    {
                         return(
                             <li className='text-base font-normal text-gray-400 tracking-wider cursor-pointer
                              hover:text-designColor duration-300' key={_id}>
                                <Link
                                activeClass='active'
                                to={link}
                                spy={true}
                                offset={-70}
                                smooth={true}
                                duration={700}
                                >
                                    {title}

                                </Link>
                                </li>
                         ) 
                     })
            }
        </ul>
      </div>


    </div>
  )
}

export default Navbar
