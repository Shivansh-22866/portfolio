import React from 'react'
import { FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='mt-12 text-white/70 py-8 container mx-auto border-t border-gray-700 pt-4 flex justify-center items-center'>
        <h1 className='text-2xl font-bold'>Shivansh Pandey</h1>

        <div className='flex space-x-6 mt-4'>
            <a href="https://www.linkedin.com/in/shivansh-pandey-5a6319282" className='hover:text-gray-300'>
                <FaLinkedin size={24} />
            </a>
        </div>
    </div>
  )
}

export default Footer