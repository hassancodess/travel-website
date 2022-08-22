import React from 'react'
import beach from '../assets/beachVid.mp4'
function Hero() {
  return (
    <>
      <section className='h-screen w-screen relative -z-10'>
        <video
          src={beach}
          autoPlay
          loop
          muted
          className='w-full h-full object-cover'
        ></video>
        <div className='container mx-auto max-w-7xl'></div>
      </section>
    </>
  )
}

export default Hero
