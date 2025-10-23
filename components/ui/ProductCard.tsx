import React from 'react'
import Image from 'next/image'

type ProductCardProps = {
  src: string;
  alt: string;
};

export default function ProductCard({ src, alt }: ProductCardProps) {
  return(
    <div className='flex flex-col justify-center items-center overflow-hidden bg-background rounded-xl'>
      <div id='image-card' className='flex w-full h-64 max-h-64 object-contain overflow-hidden rouded-xl'>
        <Image
          src={src}
          alt={alt}
          width={300}
          height={300} 
          loading='lazy'
          className='object-cover min-w-full h-full self-center p-2 overflow-hidden'
        />
      </div>
      <div className='capitalize'>{alt}</div>
    </div>
  );
}