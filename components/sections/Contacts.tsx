import React from 'react'
import { IoCallOutline, IoMailOutline } from "react-icons/io5";

const Contacts = () => {
  return (
    <section id='Contacts' className='space-y-5 h-full'>
        <h1>Contact Us</h1>
        <p>Feel free to contact us if you have any inquiries! You can also reach out through Viber using my number.</p>
        <div className='flex space-x-5 mt-10 items-center font-black'>
            <IoCallOutline size={40} />
            <small>09175165398</small>
        </div>
        <div className='flex space-x-5 mt-10 items-center font-black'>
            <IoMailOutline size={40} />
            <small>bmariacharina@gmail.com</small>
        </div>
    </section>
  )
}

export default Contacts