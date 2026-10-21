import React from 'react'
import NewsSkeletonCard from './NewsSkeletonCard'

const NewsLoader = () => {
  <div>
    {Array(5).fill(0).map((_, index) => (
      <NewsSkeletonCard key={index}/>
    ))}
  </div>  
}

export default NewsLoader