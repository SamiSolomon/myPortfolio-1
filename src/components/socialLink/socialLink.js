import React from 'react'
import { FaLinkedinIn, FaGithub} from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { GrResume } from "react-icons/gr"

export const SocialLink = () => {
  const links=[
    {
      id:1,
      child:(
        <>
        LinkedIn <FaLinkedinIn size={30} />
        </>
      ),
      href:'https://linkedin.com',
      style: 'rounded-tr-md'
    },
    {
      id:2,
      child:(
        <>
        GitHub <FaGithub size={30} />
        </>
      ),
      href:'https://github.com/SamiSolomon'
    }, 
     {
      id:3,
      child:(
        <>
        Gmail <SiGmail size={30} />
        </>
      ),
      href:'https://mail.google.com'
    }, 
     {
      id:4,
      child:(
        <>
        Resume <GrResume size={30} />
        </>
      ),
      href:'https://linkedin.com',
      style:"rounded-br-md",
      download: true
    }  
  ]
  return (
    <div name="socialLink" className='hidden lg:flex flex-col top-[45%] left-0 fixed z-30 text-white'>
        <ul >
          {links.map(({ id, child,href})=>
          <li key={ id } className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
            <a className='flex justify-between items-center w-full text-white' href={ href }>
               { child }    
            </a>
          </li> 
          )}  
        </ul>
    </div>
  )
}

export default SocialLink;
