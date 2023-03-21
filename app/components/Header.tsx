import Image from 'next/image'
import React from 'react'
import logo from '../../public/img/HeaderWeb.png'
import ListBtnPodcastes from './ListBtnPodcastes'
import Presentation from './Presentation'


const Header = () => {
  return (
    <div className='min-h-screen flex flex-col-reverse justify-center md:flex-row  md:justify-around text-center items-center'>
    
    
    <div className='hidden md:block w-4/5 md:w-2/5 '> 
      <Presentation/>
      <ListBtnPodcastes/>
    </div>
    
    <div>
    <Image style={{objectFit: "contain"}}	 className='h-full md:w-[480px] pl-8 md:mb-5 md:pl-0 2xl:w-[600px]' src={logo} alt={"Logo Mente Biblica"} />      
    </div>
    

</div>

  )
}

export default Header