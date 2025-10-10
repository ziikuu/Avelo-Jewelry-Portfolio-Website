'use client'
import React from 'react'
import { useState } from 'react'
import { navLinks } from '@/constants'
import Link from 'next/link'

const NavButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className='md:hidden max-md:flex max-md:items-center '>
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg width="54" height="25" viewBox="0 0 54 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="20" width="54" height="5" rx="2.5" fill="#1B1A17"/>
            <rect y="10" width="54" height="5" rx="2.5" fill="#1B1A17"/>
            <rect width="54" height="5" rx="2.5" fill="#1B1A17"/>
            </svg>
          </button>
      </div>
      {isOpen && (
        <nav>
          {navLinks.map((link) => (
            <Link key={link.link} href={link.link}>
              <p>{link.label}</p>
            </Link>
          ))}
        </nav>
      )}
    </div>
  )
}

export default NavButton