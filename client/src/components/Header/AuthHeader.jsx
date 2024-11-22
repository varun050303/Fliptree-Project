import React from 'react'

export default function AuthHeader() {
  return (
    <div className='header flex items-center justify-between ml-8'>
      <div className='logo flex items-center gap-5'>
        <div className='logo__img'>
          <img className='rounded-full' src='https://placehold.co/60x60' alt='Logo' />
        </div>
        <div className='logo__brandName font-semibold'>Anywhere app</div>
      </div>
      <div className="navLinks flex items-center gap-10 text-gray-400">
        <div className="navLink">Home</div>
        <div className="navLink">Join</div>
      </div>
    </div>
  )
}
