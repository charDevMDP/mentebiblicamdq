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
    <div className='animate-fade-up bg-gray-500/50 flex flex-col w-full md:w-1/4 lg:w-1/6 justify-center items-center rounded-md py-2 md:py-5 cursor-pointer hover:scale-105 ease-in duration-200' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    <Link href={link} className='flex flex-col items-center ' >
      <p className='uppercase text-xs mb-2'>{name} PODCAST</p>
      <Image src={`/img/podcasters/${logo}podcasts${isHovering ? 'blue' : 'white'}.png`} width={100} height={100} className='w-16' alt={'LOGO PODCAST'}  />
    </Link>
    </div>
  )
}

export default BtnPodcaster