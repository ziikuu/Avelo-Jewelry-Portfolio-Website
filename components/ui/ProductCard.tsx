import React from 'react'
import Image from 'next/image'

type ProductCardProps = {
  src: string;
  alt: string;
};

export default function ProductCard({ src, alt }: ProductCardProps) {
  return(
    <div>
      <Image
        src={src}
        alt={alt}
        width={300}
        height={300} 
      />
      <div>{alt}</div>
    </div>
  );
}