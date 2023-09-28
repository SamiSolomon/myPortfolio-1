import React from 'react'
import JavaScriptImage from '../../assets/javascript.png'
import Html from '../../assets/Html.png'
import BootStrap from '../../assets/Bootstrap.png'
import CSS from "../../assets/Css.png"
import Github from "../../assets/Github.png"

export const Experience= () => {
  const works= [
    {
      id:1,
      experience:Html,
      name:'Html'
    },
    {
      id:2,
      experience:CSS,
      name:"CSS"
    },
    {
      id:3,
      experience:BootStrap,
      name:'Bootstrap'
    },
    {
      id:4,
      experience:CSS,
      name:'css'
    },
    {
      id:5,
      experience:JavaScriptImage,
      name:'javaScript'
    },
    {
      id:6,
      experience:Github,
      name:'github'
    },
  ]
  return (
    <div name="experience" className='grid grid-col-1 justify-content-center h-screen w-full  text-white bg-slate-900'>
      <div className=' text-white ml-28 '>
        <div className=' mb-3'>
          <h1 className=' inline border-b-4 border-gray-500  text-2xl font-bold'>Experience</h1>
          <p className='text-gray-400 mt-3'>These are the technologies I've worked with</p>
        </div>
        <div className=''>
          <ul className='grid grid-cols-3 gap-3 lg:grid-cols-4'>
            {works.map(({id, experience, name}) => <li key={id} className='flex flex-col justify-center shadow-2xl gap-3  hover:shadow-indigo-300/40  duration-400 transtion-all transform'>
              <img className='h-1/2' src={experience} alt='javascript '/>
              <p className='flex justify-center font-bold'> { name } </p>
            </li>
            )}
          </ul> 
        </div>
      </div>
    </div>
  )
}


export default Experience;

