import React from 'react'
import Image from 'next/image'

const SeasonCard = ({season}:any) => {

  const { number, image, title, description } = season

  return (
    <div className='flex flex-col md:flex-row md:gap-8 animate-fade-up items-center justify-center border-b py-8 h-2/5 md:h-[35%] w-[80%]  bg-gray-100/20 rounded-t-md md:px-5 '>
      
      <div className='flex xl:flex-col justify-center w-100 md:w-1/3 md:justify-around md:gap-5'>
        <div className='flex flex-col justify-center items-center md:items-end mr-5 md:mr-0 md:w-100'>
        <p className='text-xs md:text-xl font-bold pb-2'>Temporada</p>
        <p className='text-6xl md:text-4xl font-bold'>{ number }<span className='text-azulClaro'>.</span></p>
        </div>
        <div className='flex justify-center items-center md:justify-end'>
          <Image alt='temp1' src={`/img/temporada/${image}`} className='w-20 md:w-28' width={200} height={200} />
        </div>
      </div>

      <div className='flex flex-col md:justify-center items-center md:items-start my-5 md:mt-0 w-[80%] md:w-2/4'>
        <p className='text-lg md:text-xl my-2 font-bold text-azulClaro'>{title}</p>
        <p className='text-xs md:text-lg text-center md:text-start'>{description}</p>
      </div>
  </div>
  )
}

export default SeasonCard