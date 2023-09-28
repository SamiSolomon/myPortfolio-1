import React from 'react';
import { AiOutlineRight } from "react-icons/ai"
import { Link } from "react-scroll"
import my from "../../assets/myphoto.png"

function Home(){

    return (
        <div name="home" className="bg-slate-900 h-screen w-full">
         <div className='max-w-screen-lg mx-auto h-screen w-full flex flex-col px-4 items-center justify-center  md:flex-row '>
           <div className='flex flex-col justify-center h-full'>           
                <h2 className='text-3xl sm:text-6xl font-bold text-white'> frontend developer </h2>
                <p className='text-gray-500 py-4 max-w-md'>I play a crucual role to make awsome websites.
                    currently, I love to work on web application using technologies like
                    React, Tailwind , Next Js and Django.
                </p>
                <div>
                    <Link to="portfolio" smooth duration={500} className='group text-white font-bold uppercase w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                    portfolio
                    <span className='group-hover:rotate-90 duration-300'> < AiOutlineRight size={25} />  </span>
                    </Link>
                </div>
           </div>
            <div className=''>
                <img src={my} alt="my profile"
                className='ml-6 rounded-2xl  w-2/3 md:w-full' />
            </div>
         </div>
        </div>
    )}

export default Home;