import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
  return (
    <div className='flex h-full'>
<div className='w-full  bg-gray-900 leading-loose items-center justify-center flex flex-col'>
    <Image src='/logo/isologotipo.png' width={300} height={150} className='w-48 animate-fade-up' alt={'LOGO MENTE BIBLICA'} />
    <p className='font-[RusticaM] md:mt-5 text-2xl md:text-4xl 2xl:text-5xl animate-fade-down'>MENTE <span className='text-azulClaro'>BIBLICA</span></p>

      <div className=' mt-5 text-sm md:text-md text-center mx-5 md:w-[60%]'>
        <p className=' mt-2'>
        Esta pensado para aquellas personas que quieren saber mas de la Biblia,
        conocer mas que dice Dios en realmente en Su Palabra, que buscan aprender, 
        </p>
        <p className=' mt-2'>que buscan que sus mentes se renueven para entender mas la voluntad de Dios y así poder aplicarla en sus vida,
        </p>
       
      </div>
    
    </div>

    </div>
    
  )
}

export default AboutPage