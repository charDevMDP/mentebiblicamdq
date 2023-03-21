import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const BtnPodcaster = (props:any) => {

  const { name, logo, alt, link } = props;

  console.log(props)

  return (
    <Link className='flex cursor-pointer bg-black hover:shadow-sm hover:shadow-gray-600 text-white w-[10rem] justify-around md:justify-center xl:w-[12rem] 2xl:w-[16rem] rounded-md md:rounded-xl px-2 py-2 xl:px-2 2xl:px-5 xl:py-2' href={link} target="_blank">
    <Image src={logo} className='w-6 xl:w-8 2xl:w-12' alt={alt}/>
    <div className='ml-2 xl:ml-3 2xl:ml-5 my-auto text-left'>
      <p className='text-xs 2xl:text-sm'>Escúchalo en</p>
      <p className='font-[RusticaM] text-xs 2xl:text-md'><span className='uppercase'>{name}</span> PODCAST</p>
    </div>
  </Link>
  )
}

export default BtnPodcaster