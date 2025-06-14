'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const BtnPodcaster = (props:any) => {


  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  const { name, logo, alt, link } = props;


  return (
    <div className='flex animate-fade-up bg-gray-500/50 flex flex-col w-full md:w-1/4 lg:w-1/4 justify-center items-center rounded-md py-2 md:py-5 md:mx-5 cursor-pointer hover:scale-105 ease-in duration-200' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    <Link href={link} className='flex row items-center my-5 mx-5' >
      <Image src={`/img/podcasters/${logo}podcasts${isHovering ? 'blue' : 'white'}.png`} width={100} height={100} className='w-12 md:w-16' alt={'LOGO PODCAST'}  />
      <div className='flex flex-col text-left ml-5'>
        <p className='uppercase text-md md:text-xl mb-2'>{name} PODCAST</p>
        { name === 'apple' ? 
          <p className='text-xs md:text-md'>Disponible en Apple Podcasts.</p> 
          : <p className='text-xs md:text-md'>Escucha y suscríbete en Spotify.</p>}
      </div>
    </Link>
    </div>
  )
}

export default BtnPodcaster