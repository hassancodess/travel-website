import React from 'react'
import { FaUser, FaSearch } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import {
  IoClose,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoTwitter,
  IoLogoYoutube,
} from 'react-icons/io5'
import { useState } from 'react'
function Navbar() {
  const [nav, setNav] = useState(false)
  const toggleNav = () => {
    setNav((prev) => {
      return !prev
    })
  }
  const styles = {
    gradientBtn:
      'px-8 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-gray-100 rounded-lg',
    socialIcon:
      'hover:scale-125 hover:rotate-6 duration-200 ease-in-out hover:text-blue-500',
  }
  return (
    <>
      {/* Nav Container */}
      <nav className='p-4'>
        {/* Main Container */}
        <div className='container mx-auto max-w-7xl'>
          {/* Flex Container */}
          <div className='flex justify-between items-center relative'>
            {/* Logo */}
            <h1 className='uppercase text-2xl font-bold'>Beaches.</h1>
            {/* Menu */}
            <div className='hidden md:flex space-x-10'>
              <a href='#'>Home</a>
              <a href='#'>Destinations</a>
              <a href='#'>Travel</a>
              <a href='#'>Views</a>
              <a href='#'>Book</a>
            </div>
            {/* Icons */}
            <div className='hidden md:flex space-x-6'>
              <FaSearch size={18} />
              <FaUser size={18} />
            </div>
            {/* Mobile Hamburger */}
            <div className='md:hidden' onClick={toggleNav}>
              {nav ? <IoClose size={25} /> : <FiMenu size={25} />}
            </div>
            {/* Mobile Menu */}
            <div
              className={`absolute top-14 left-0 w-full rounded-xl text-white text-center bg-black bg-opacity-30 px-10 py-5  ${
                nav ? '' : 'hidden'
              }`}
            >
              <div className='flex flex-col space-y-8'>
                {/* Menu */}
                <div className='flex flex-col space-y-4'>
                  <a href='#' className='border-b pb-2'>
                    Home
                  </a>
                  <a href='#' className='border-b pb-2'>
                    Destinations
                  </a>
                  <a href='#' className='border-b pb-2'>
                    Travel
                  </a>
                  <a href='#' className='border-b pb-2'>
                    Views
                  </a>
                  <a href='#' className='border-b pb-2'>
                    Book
                  </a>
                </div>
                {/* Buttons */}
                <div className='flex flex-col space-y-2'>
                  <button className={styles.gradientBtn}>Search</button>
                  <button className={styles.gradientBtn}>Account</button>
                </div>
                {/* Social Icons */}
                <div className='flex justify-between text-gray-800'>
                  <IoLogoFacebook size={25} className={styles.socialIcon} />
                  <IoLogoTwitter size={25} className={styles.socialIcon} />
                  <IoLogoInstagram size={25} className={styles.socialIcon} />
                  <IoLogoPinterest size={25} className={styles.socialIcon} />
                  <IoLogoYoutube size={25} className={styles.socialIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
