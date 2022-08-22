import React from 'react'
import beach from '../assets/beachVid.mp4'
import { FaSearch } from 'react-icons/fa'

function Hero() {
  return (
    <>
      {/* Video Background */}
      <section className='relative -z-10'>
        <video
          src={beach}
          autoPlay
          loop
          muted
          className='h-screen w-screen absolute  object-cover'
        ></video>
        {/* Overlay */}
        <div className='absolute top-0  w-screen h-screen bg-gradient-to-t from-gray-700  to-black opacity-50 '></div>
        {/* Content */}
        <div className='h-screen w-screen top-0 absolute z-50'>
          <div className='container mx-auto max-w-7xl h-full w-full flex flex-col space-y-8 items-center justify-center'>
            <h1 className='text-2xl xl:text-5xl font-bold text-white text-center'>
              First Class Travel
            </h1>
            <h1 className='text-2xl font-bold xl:text-5xl text-white tex-center'>
              Top 1% Locations Worldwide
            </h1>
            <div className='flex items-center bg-white px-4 py-2 w-full max-w-xs md:max-w-md xl:max-w-3xl rounded-lg'>
              <input
                type='text '
                className='w-full py-2 px-3 bg-transparent outline-none'
                placeholder='Enter email'
              />
              <div className='bg-blue-400 text-white p-2 rounded-lg'>
                <FaSearch size={25} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
