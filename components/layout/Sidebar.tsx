import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <aside className='sticky top-0 left-0 max-md:hidden font-black mr-5 h-full w-[20%] max-w-[202px] pt-16'>
        <nav className=''>
            <ul className=''>
                <li><Link href='#Home'><p className=''>Home</p></Link></li>
                <li><Link href='#About'><p className=''>About</p></Link></li>
                <li><Link href='#Portfolio'><p className=''>Portfolio</p></Link></li>
                <li><Link href='#Contacts'><p className=''>Contacts</p></Link></li>
            </ul>
        </nav>
    </aside>
  )
}

export default Sidebar