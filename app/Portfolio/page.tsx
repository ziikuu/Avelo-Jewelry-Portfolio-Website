"use client"

import ProductCard from '@/components/ui/ProductCard'
import { getCategoryImages, portfolioCounts } from '@/lib/portfolioImages'
import React, { useState, useMemo } from 'react'

type CategoryKey = keyof typeof portfolioCounts | 'all';

interface FilteredItem {
  src: string;
  alt: string;
  category: string;
}

const categoryLabels: Record<CategoryKey, string> = {
  all: 'All',
  bracelet: 'Bracelets',
  earring: 'Earrings',
  necklace: 'Necklaces',
  ring: 'Rings',
  set: 'Sets',
};

const Page = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryKey>('all');

  //generate all items
  const allItems = useMemo( () => {
    const items: FilteredItem[] = [];
    Object.keys(portfolioCounts).forEach( (category) => {
      const images = getCategoryImages(category as keyof typeof portfolioCounts);
      images.forEach( (src, i) => {
        items.push({
          src,
          alt: `${category} ${i + 1}`,
          category,
        });
      });
    });
    return items;
  }, []);

  //filter item based on selected category
  const filteredItems = useMemo( () => {
    if (activeFilter === 'all') return allItems;
    return allItems.filter(item => item.category === activeFilter);
  }, [activeFilter, allItems]);

  // Get count for each category
  const getCategoryCount = (category: CategoryKey) => {
    if (category === 'all') return allItems.length;
    return portfolioCounts[category as keyof typeof portfolioCounts];
  };

  return (
    <div id='container' className='flex justify-center flex-col pb-12'>
      <h2 className='mt-8 md:mt-10 mb-6 md:mb-8 text-center'>Our Collection</h2>

      {/* Filter Buttons */}
      <div className='mb-8 md:mb-12'>
        <div className='flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 px-2'>
          {(Object.keys(categoryLabels) as CategoryKey[]).map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`
                relative px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3
                text-sm sm:text-base md:text-lg font-semibold
                rounded-full transition-all duration-300 ease-in-out
                border-2
                ${activeFilter === category
                  ? 'bg-foreground text-background border-foreground shadow-lg scale-105'
                  : 'bg-background text-foreground border-foreground/30 hover:border-foreground hover:shadow-md hover:scale-102'
                }
              `}
            >
              <span className='relative z-10'>
                {categoryLabels[category]}
              </span>
              
              {/* Item count badge */}
              <span 
                className={`
                  ml-1.5 sm:ml-2 text-xs sm:text-sm font-bold
                  ${activeFilter === category ? 'text-background/80' : 'text-foreground/60'}
                `}
              >
                ({getCategoryCount(category)})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className='mb-6 text-center'>
        <p className='text-base sm:text-lg md:text-xl text-foreground/70'>
          {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
          {activeFilter !== 'all' && ` in ${categoryLabels[activeFilter]}`}
        </p>
      </div>

      {/* Product Grid with Animation */}
      <div 
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 transition-all duration-300'
        key={activeFilter} // Force re-render for smoother animation
      >
        {filteredItems.map((item, index) => (
          <div
            key={item.src}
            className='animate-fadeIn'
            style={{
              animationDelay: `${index * 30}ms`, // Stagger animation
              animationFillMode: 'both'
            }}
          >
            <ProductCard
              src={item.src}
              alt={item.alt}
            />
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className='text-center py-16 sm:py-20 md:py-24'>
          <div className='text-4xl sm:text-5xl md:text-6xl mb-4'>💎</div>
          <h3 className='text-xl sm:text-2xl md:text-3xl mb-2 text-foreground/80'>
            No items found
          </h3>
          <p className='text-base sm:text-lg text-foreground/60'>
            Try selecting a different category
          </p>
        </div>
      )}
    </div>
  )
}

export default Page