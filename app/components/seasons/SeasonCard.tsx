import React from 'react'
import Image from 'next/image'

const SeasonCard = ({season}:any) => {

  const { number, image, title, description } = season

  return (
    <div className='flex flex-col md:flex-row animate-fade-up items-center border-b py-8 h-1/3 md:h-[20%] w-[80%]  bg-gray-100/20 rounded-t-md md:px-5 '>
      <div className='flex md:justify-center items-center'>
        <p className='text-5xl md:text-3xl font-bold'>{ number }<span className='text-azulClaro'>.</span></p>
        <Image alt='temp1' src={`/img/temporada/${image}`} className='mx-2 md:mx-5 rounded-md w-18 h-18 md:w-16 md:h-16s' width={100} height={100} />
      </div>
    <div className='flex flex-col md:justify-center items-center md:items-start mt-5 md:mt-0 w-[65%]'>
      <p className='text-sm font-bold text-azulClaro'>{title}</p>
      <p className='text-xs text-center md:text-start'>{description}</p>
    </div>
  </div>
  )
}

export default SeasonCard