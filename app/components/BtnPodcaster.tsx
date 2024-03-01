'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const BtnPodcaster = (props:any) => {

  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  const { name, logo, logohover, alt, link } = props;

  return (

  <div className=' bg-azulClaro flex flex-col w-full md:w-1/4 lg:w-1/6 justify-center items-center rounded-md py-5 cursor-pointer hover:scale-105 ease-in duration-200' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    <p className='uppercase'>{name} PODCAST</p>
    {isHovering ? (
    <Image src={logo} className='w-24' alt={'LOGO PODCAST'}  />
    ):(
      <Image src={logohover} className='w-24' alt={'LOGO PODCAST'}  />
    )}
  </div>
  )
}

export default BtnPodcaster