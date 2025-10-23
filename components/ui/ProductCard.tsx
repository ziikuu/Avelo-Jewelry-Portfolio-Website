"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react';

type ProductCardProps = {
  src: string;
  alt: string;
};

export default function ProductCard({ src, alt }: ProductCardProps) {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className='flex flex-col justify-center items-center overflow-hidden bg-background rounded-xl'>
      <div id='image-card' className='flex w-full h-64 max-h-64 object-contain overflow-hidden rouded-xl'>
        <Image
          src={src}
          alt={alt}
          width={300}
          height={300} 
          loading='lazy'
          className='object-cover min-w-full h-full self-center p-2 overflow-hidden cursor-pointer'
          onClick={() => setIsOpen(true)}
        />

        {isOpen && (
          <div className='fixed inset-0 w-full h-full p-10 bg-foreground/80 z-9999'
            onClick={(() => setIsOpen(false))}
          >
            <Image
              src={src}
              alt={alt}
              width={300}
              height={300} 
              loading='lazy'
              className='object-cover min-w-full h-full self-center p-2 overflow-hidden cursor-pointer'
            />
          </div>
        )}
      </div>
      <div className='capitalize'>{alt}</div>
    </div>
  );
}