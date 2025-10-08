import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className='flex mt-5 max-md:flex-col-reverse gap-2.5 lg:gap-5'>
        <div id='textContainer' className='font-caviar'>
            <h1>About Us</h1>
            <p>We Started our business since 1972 inherited from my Mother</p>
        </div>
        <div id='aboutImgcontainer' className='pt-3.5 pl-5 ml-auto'>
            <Image 
              src='/images/about/about-picture.avif'
              alt='Silver wedding bands'
              width={400}
              height={600}
              priority
              className='object-cover'
              style={{ boxShadow: '-8px -8px 6.2px 7px rgba(0, 0, 0, 0.25)' }}
            />
        </div>
    </section>
  )
}

export default About