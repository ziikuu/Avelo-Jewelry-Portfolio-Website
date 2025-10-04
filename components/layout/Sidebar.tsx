import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <aside className='max-md:hidden font-black mr-5 w-[20%] max-w-[202px] pt-16'>
      <nav>
        <ul className=''>
          <li><Link href='/'><p>Home</p></Link></li>
          <li><Link href='#About'><p>About</p></Link></li>
          <li><Link href='/Portfolio'><p>Portfolio</p></Link></li>
          <li><Link href='#Contacts'><p>Contacts</p></Link></li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar