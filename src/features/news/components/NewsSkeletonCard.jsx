import React from 'react'

const NewsSkeletonCard = () => {
  return (
<div className="bg-white border border-stone-300 rounded-md shadow-sm mb-6 overflow-hidden animate-pulse">
    <div className="p-6">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-4/12 px-4 pb-4 lg:pb-0">
          <div className="w-full h-48 bg-gray-200 rounded-lg"></div>
        </div>
        {/* Content placeholder */}
        <div className="w-full md:w-8/12 px-4">
          {/* Title placeholder */}
          <div className="h-8 bg-gray-200 rounded mb-3 w-3/4"></div>
        
          {/* Date placeholder */}
          <div className="h-4 bg-gray-200 rounded mb-3 w-1/2"></div>
        
          {/* Description placeholder */}
          <div className="space-y-2 mb-4">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
        
          {/* Footer placeholder */}
          <div className="flex justify-between items-center">
            <div className="h-6 bg-gray-200 rounded-full w-20"></div>
            <div className="h-10 bg-gray-200 rounded w-24"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default NewsSkeletonCard