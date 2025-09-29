import React from 'react'
import { Button } from '../ui'

const Header = () => {
  return (
    <header className='responsive-margin mt-6 md:mt-8 lg:mt-16 top-0 sticky flex'>
      <h2 className='mr-auto'>Repair Shop</h2>
      <Button />
    </header>
  )
}

export default Header