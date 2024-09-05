import React from 'react';
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
const Navbar = () => {
  return (
    <nav className='mb-20 flex item-center justify-between py-6'>
        <div className='flex flex-shirnk-0 items-center'>
          <h2 className='text-4xl'><span className='text-5xl'>K</span>G</h2>
            
        </div>
        <div className=' m-8 flex items-center justify-center gap-10 text-2xl '>
            <a href='https://www.linkedin.com/in/khasim-guduru-906505242'><FaLinkedin /></a>
            <FaGithub />
            <FaInstagram />
        </div>
    </nav>
  )
}

export default Navbar
