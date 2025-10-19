import ProductCard from '@/components/ui/ProductCard'
import { getCategoryImages, getImagePath, portfolioCounts } from '@/lib/portfolioImages'
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center flex-col'>
      <div className='flex justify-center mt-10 p-5 w-screen'>
        <h2 className=''>Our Collection</h2>
      </div>
      {/* Product cards */}
      {Object.keys(portfolioCounts).map( (category) => (
        <div key={category} className='mb-10'>
          <h3 className='capitalize'>{category}</h3>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {getCategoryImages(category as keyof typeof portfolioCounts).map((src, i) => (
              <ProductCard
                key={src}
                src={src}
                alt={`${category} ${i + 1}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default page