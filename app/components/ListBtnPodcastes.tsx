import React from 'react'


import BtnPodcaster from './BtnPodcaster'
import Image from 'next/image'

const podcasters = [
  {
    logo:"apple",
    alt: 'logo apple',
    name:'apple',
    link: 'https://podcasts.apple.com/ar/podcast/mentebiblica/id1676950278'
  },
  {
    logo:"google",
    alt: 'logo google',
    name:'google',
    link: 'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9kODEyM2MyNC9wb2RjYXN0L3Jzcw?sa=X&ved=0CBoQ27cFahcKEwjI5oSi5dv9AhUAAAAAHQAAAAAQOg&hl=es-419'
  },
  {
    logo:"spotify",
    alt: 'logo spotify',
    name:'spotify',
    link: 'https://open.spotify.com/show/5Usq7O8uLFw00yECINN5b0'
  },
]
const ListBtnPodcastes = () => {
  return (
    <div className='h-full w-full flex flex-col md:mt-0 justify-center text-center mx-auto '>
    <div className='text-xs xl:text-sm 2xl:text-lg' >
      <Image src='/logo/LogoCircleFull.png' width={120} height={120} className='mx-auto my-5' alt={'LOGO MENTE BIBLICA'} />
        <p>Ya esta disponible! </p>
        <p>En las plataformas de podcasts más escuchadas...</p>

        <p className='text-[#477BFF] text-center my-5 italic'>Escúchalo en</p>
      </div>
        
      <div className='flex flex-col md:flex-row w-2/3 md:w-full mx-auto justify-center gap-5'>
        
        { podcasters.length > 0 && (
          podcasters.map(pod => {
            return (
              <BtnPodcaster key={pod.name} logo={pod.logo} alt={pod.alt} name={pod.name} link={pod.link} />
            )
          })
        )}
          
      </div>
    </div>
  )
}

export default ListBtnPodcastes