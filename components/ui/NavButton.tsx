'use client'
import React from 'react'
import { useState } from 'react'
import { navLinks } from '@/constants'
import Link from 'next/link'

const NavButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className='z-2000 fixed right-5 top-8 md:hidden max-md:flex max-md:items-center '>
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg width="54" height="25" viewBox="0 0 54 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect className={`transition-all duration-300 origin-left ${isOpen ? '-rotate-20' :''}`} y="20" width="54" height="5" rx="2.5" fill="#1B1A17"/>
            <rect className={`transition-all duration-300 ${isOpen ? 'hidden':''}`} y="10" width="54" height="5" rx="2.5" fill="#1B1A17"/>
            <rect className={`transition-all duration-300 origin-left ${isOpen ? 'rotate-20':''}`} width="54" height="5" rx="2.5" fill="#1B1A17"/>
            </svg>
          </button>
      </div>
      {isOpen && (
        <div className='flex justify-center items-center bg-background fixed left-0 top-0  w-screen h-screen z-1000'>
          <nav className='font-black'>
            {navLinks.map((link) => (
              <Link onClick={(() => setIsOpen(!isOpen))} className='flex justify-center' key={link.link} href={link.link}>
                <p>{link.label}</p>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}

export default NavButton