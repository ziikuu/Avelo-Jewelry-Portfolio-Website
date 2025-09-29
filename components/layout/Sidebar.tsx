import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <aside className='max-md:hidden font-black mr-5 h-dvh w-14.03% min-w-fit max-w-[14.03%] sticky top-0 p-4'>
        <nav>
            <ul>
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