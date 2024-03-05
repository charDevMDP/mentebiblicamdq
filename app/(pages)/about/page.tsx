import FollowOptions from '@/app/components/about/FollowOptions'
import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
  return (
    <div className='flex h-full'>
<div className='w-full  bg-gray-900 leading-loose items-center justify-center flex flex-col'>
    <Image src='/logo/isologotipo.png' width={300} height={150} className='w-48 animate-fade-up' alt={'LOGO MENTE BIBLICA'} />
    <p className='font-[RusticaM] md:mt-5 text-2xl md:text-4xl 2xl:text-5xl animate-fade-down'>MENTE <span className='text-azulClaro'>BIBLICA</span></p>

      <div className=' mt-5 text-xs md:text-lg text-center mx-5 md:w-[60%]'>
        <p className=' mt-2'>
        Este proyecto esta pensado y orientado para aquellas personas que, conociendo o no algo de la <span className='text-azulClaro'>Biblia</span>, quieren saber o aprender más de la <span className='text-azulClaro'>Biblia</span>, quieren conocer más que dice Dios realmente en Su Palabra, y buscan que sus mentes se abran y se renueven para entender más la voluntad de Dios y así poder aplicarla en sus vidas...
        </p>
       
      </div>

      <FollowOptions />

    </div>
    </div>
    
  )
}

export default AboutPage