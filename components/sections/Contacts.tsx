import React from 'react'
import { IoCallOutline, IoMailOutline } from "react-icons/io5";
import { IconContext } from 'react-icons';

const Contacts = () => {
  return (
    <section id='Contacts' className='space-y-5 h-full overflow-x-auto min-w-[400px]'>
        <h1>Contact Us</h1>
        <p>Feel free to contact us if you have any inquiries! You can also reach out through Viber using my number.</p>
        <div className='flex space-x-5 mt-10 items-center'>
            
            <IoCallOutline size={50} />

            <p>09770139650</p>
        </div>
        <div className='flex space-x-5 mt-10 items-center'>


                <IoMailOutline size={50} />

            <p>bmariacharina@gmail.com</p>
        </div>
    </section>
  )
}

export default Contacts