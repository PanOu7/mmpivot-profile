import React from 'react'

const AboutCounterCard = ({counter:{title,value}}) => {
  return (
    <div className=' flex flex-col items-center '>
        <h4 className=' font-bold text-4xl'>{value}</h4>
        <p className=' text-gray-600 text-center text-sm lg:text-base'>{title}</p>
    </div>
  )
}

export default AboutCounterCard