import React from 'react'
import Image from 'next/image'

const SeasonCard = ({season}:any) => {

  const { number, image, title, description } = season

  return (
    <div className='flex flex-col md:flex-row animate-fade-up items-center border-b py-8 h-2/5 md:h-[35%] w-[80%]  bg-gray-100/20 rounded-t-md md:px-5 '>
      <div className='flex justify-center w-2/3 md:justify-around'>
        <div className='flex flex-col justify-center items-center md:items-end mr-5 md:w-1/3'>
        <p className='text-xs md:text-2xl font-bold pb-2'>Temporada</p>
        <p className='text-6xl md:text-8xl font-bold'>{ number }<span className='text-azulClaro'>.</span></p>
        </div>
        <Image alt='temp1' src={`/img/temporada/${image}`} className='mx-2 w-18 h-18 rounded-md md:mx-5 md:w-18 md:h-18  md:w-1/3' width={100} height={100} />
      </div>

      <div className='flex flex-col md:justify-center items-center md:items-start my-5 md:mt-0 w-[80%] md:w-1/3'>
        <p className='text-lg md:text-xl my-2 font-bold text-azulClaro'>{title}</p>
        <p className='text-xs md:text-lg text-center md:text-start'>{description}</p>
      </div>
  </div>
  )
}

export default SeasonCard