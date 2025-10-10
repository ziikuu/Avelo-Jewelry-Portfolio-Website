import Link from 'next/link'
import React from 'react'
import { navLinks } from '@/constants'

const Sidebar = () => {
  return (
    <aside className='max-md:hidden font-black mr-5 w-[20%] max-w-[202px] pt-16'>
      <nav>
        <ul className=''>
          {navLinks.map((link) => (
            <Link key={link.link} href={link.link}>
              <li><p>{link.label}</p></li>
            </Link>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar