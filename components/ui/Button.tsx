import React from 'react'
import Link from 'next/link'

const Button = () => {
  return (
    <Link href='#Contacts'>
        <button className='btn-hover bg-foreground text-background font-black py-2 px-6 rounded-full'>
            <p>Contact Us</p>
        </button>
    </Link>
  )
}

export default Button