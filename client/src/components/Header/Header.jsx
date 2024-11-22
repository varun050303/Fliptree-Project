import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex justify-between items-center p-4 bg-white border-b border-gray-200'>
      {/* Left Section - Profile Icon and Links */}
      <div className='flex items-center'>
        {/* Profile Icon */}
        <div className='mr-6'>
          <Link to='/home'>
            <img
              src='/brandLogo.png'
              alt='Profile'
              className='w-full h-10 cursor-pointer'
            />
          </Link>
        </div>
      </div>

      {/* Right Section - Logo */}
      <div>
        <Link to='/cart' className='text-lg text-gray-800 hover:text-blue-600'>
          Cart
        </Link>
      </div>
    </header>
  )
}

export default Header
