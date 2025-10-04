import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div id='heroContainer' className='grid gap-5 grid-cols-10 items-center'>
        <div id='bigImageContainer' className='col-span-6'>
          <Image
            src='/images/hero/ring_hero.jpg'
            alt='Gold ring with gemstone'
            width={1200}
            height={800}
            priority
          />
        </div>

        <div id='smallImageContainer' className='col-span-4'>
          <Image 
            src='/images/hero/ring_hero (2).jpg'
            alt='Silver wedding bands'
            width={600}
            height={400}
            priority
          />
        </div>
    </div>
  )
}

export default Hero