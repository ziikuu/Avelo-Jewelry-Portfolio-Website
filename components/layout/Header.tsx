import React from 'react'
import { Button, NavButton } from '../ui'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='responsive-margin mt-6 md:mt-8 lg:mt-16 flex'>
      <Link href='/' className='mr-auto'>
        <h2>Repair Shop</h2>
      </Link>
      <Button />
      <NavButton />
    </header>
  )
}

export default Header