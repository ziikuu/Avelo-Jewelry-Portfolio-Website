import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div id='heroContainer' className='grid gap-5 grid-cols-10 items-center h-[90%] overflow-hidden mb-[10%]'>
        <div id='bigImageContainer' className='col-span-6 mt-5 ml-5'>
          <Image
            src='/images/hero/ring_hero.jpg'
            alt='Gold ring with gemstone'
            width={1200}
            height={800}
            priority
            className=''
          />
        </div>

        <div id='smallImageContainer' className='col-span-4 mt-5 ml-5'>
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