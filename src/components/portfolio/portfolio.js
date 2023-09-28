import React from 'react'
import JavaScriptImage from '../../assets/javascript.png'
import Temperature from '../../assets/Temperatur Control.png'
import BlogApp from '../../assets/Blog app.png'
import SimpleNote from "../../assets/Simple Notes app.png"
import JavaCalculator from "../../assets/javacalculator.jpg"
import EmojiSearch from "../../assets/Emoji Search app.png"

export const Portfolio = () => {
  const works=[
    {
      id:1,
      work:Temperature,
      alt:"Temperature Control"
    },
    {
      id:2,
      work:SimpleNote,
      alt:"SimpleNote app"
    },
    {
      id:3,
      work:BlogApp,
      alt:"BlgoApp"
    },
    {
      id:4,
      work:JavaCalculator,
      alt:"JavaCalculator"
    },
    {
      id:5,
      work:JavaScriptImage,
      alt:"javaScriptImage"
    },
    {
      id:6,
      work:EmojiSearch,
      alt:"emojiSearch"
    },
  ]
  
  return (
    <div name="portfolio" className='grid grid-col-1 justify-content-center py-16 h-screen w-full  text-white bg-slate-900'>
      <div className=' text-white ml-28 '>
        <div className=' my-6'>
          <h1 className=' inline border-b-4 border-gray-400  text-2xl font-bold'>Portfolio</h1>
          <p className='text-gray-400 mt-3'>check out what I did in the last couple years</p>
        </div>
        <div className=''>
          <ul className='grid grid-cols-3 lg:grid-cols-4'>
            {works.map(({id, work, alt}) => <li key={id} className='shadow-2xl gap-4 m-2 hover:shadow-indigo-300/40  duration-400 transtion-all transform'>
              <img className='-mb-4 h-32 w-screen' src={work} alt= {alt}/>
              <div className=' pb-2 flex justify-center items-center gap-28 font-medium pt-6 '>
                <p className=''>demo</p>
                <p className=''>code</p>
              </div>
            </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )}


export default Portfolio;
