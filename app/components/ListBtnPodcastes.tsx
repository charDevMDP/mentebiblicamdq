import React from 'react'
import apple from '../../public/podcasters/apple.png'
import google from '../../public/podcasters/google.png'
import spotify from '../../public/podcasters/spotify.png'

import BtnPodcaster from './BtnPodcaster'

const podcasters = [
  {
    logo:apple,
    alt: 'logo apple',
    name:'apple',
    link: 'https://podcasts.apple.com/ar/podcast/mentebiblica/id1676950278'
  },
  {
    logo:google,
    alt: 'logo google',
    name:'google',
    link: 'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9kODEyM2MyNC9wb2RjYXN0L3Jzcw?sa=X&ved=0CBoQ27cFahcKEwjI5oSi5dv9AhUAAAAAHQAAAAAQOg&hl=es-419'
  },
  {
    logo:spotify,
    alt: 'logo spotify',
    name:'spotify',
    link: 'https://open.spotify.com/show/5Usq7O8uLFw00yECINN5b0'
  },
]
const ListBtnPodcastes = () => {
  return (
    <div className='mt-5 text-center md:text-left'>
    <div className='text-xs xl:text-sm 2xl:text-lg mb-2' >
        <p><span className='mr-2 text-[#477BFF]'>MenteBiblica</span>Ya esta disponible! </p>
        <p>En las plataformas de podcasts mas escuchadas..</p>
      </div>
        
      <div className='flex flex-col md:flex-row gap-2 mt-5 items-center justify-center md:justify-around'>
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