"use client";
import Container from '@/components/Container'
import ProductCardSkeleton from '@/features/product/components/ProductCardSkeleton'
import ProductCategorySkeleton from '@/features/product/components/ProductCategorySkeleton'
import React from 'react'

const CategorySkipSection = () => {
  return (
    <section className='my-3'>
      <Container className={`grid grid-cols-12 gap-5 md:gap-0`}>
        <div className="col-span-12 md:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-5 pr-5 pl-5 lg:pl-0 border-r border-gray-300">
          {Array.from({ length: 6 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
        <div className="col-span-12 md:col-span-5 pl-5 pr-5 lg:pr-0">
          <div className="sticky top-2">
            <ProductCategorySkeleton />
            <div className="mt-4 animate-pulse">
              <div className="flex items-center -space-x-px text-base">
                {/* Previous button */}
                <div className="px-2 h-10 w-10 bg-gray-300 rounded-s-sm mr-px"></div>
                {/* Page number placeholders */}
                {[...Array(3)].map((_, idx) => (
                  <div key={idx} className="px-3 h-10 w-10 bg-gray-300 mx-px"></div>
                ))}
                {/* Next button */}
                <div className="px-2 h-10 w-10 bg-gray-300 rounded-e-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CategorySkipSection