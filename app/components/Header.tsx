'use client'
import Image from 'next/image'
import React from 'react'
import logo from '../../public/img/HeaderPhone.png'
import ListBtnPodcastes from './ListBtnPodcastes'
import Presentation from './Presentation'
import Typewriter from 'typewriter-effect';




const Header = () => {
  return (
    <div className='h-full w-full md:flex flex-col md:flex-row justify-center items-center'>
    
    <div className='animate-fade-right md:animate-fade-up w-full md:w-1/2 flex flex-col justify-end md:justify-center items-center md:items-end md:text-3xl lg:text-5xl h-1/3'> 
      <Typewriter
          options={{
            strings: ['HABLA', 'PIENSA', 'VIVE'],
            autoStart: true,
            loop: true,
          }}
        />
      <p>CON UNA..</p>
      <p className='text-azulClaro font-bold md:text-4xl lg:text-6xl'>MENTE BIBLICA</p>
      
    </div>
    
    <div className='animate-fade-left w-full md:w-1/2 h-2/3 md:h-full flex justify-center'>
      <Image style={{objectFit: "contain"}}	 className='w-48 md:w-72' src={logo} alt={"Logo Mente Biblica"} />      
    </div>
    

</div>

  )
}

export default Header