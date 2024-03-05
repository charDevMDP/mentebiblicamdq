'use client'
import React, { useState } from 'react'

const FollowOptions = () => {

  const [hoverFb, setHoverFb] = useState('blue')
  const [hoverIg, setHoverIg] = useState('blue')

  return (
    <div className='text-center mt-5'>
      <p>Seguinos</p>
    <div className='flex gap-5'>
      
      <a onMouseOver={() => setHoverIg('white')} onMouseLeave={() => setHoverIg('blue')} href='https://www.instagram.com/mentebiblicamdq' target='_blank'>
        <img src={`/logo/redes/ig-${hoverIg}.png`} className='w-8 h-8 hover:scale-105 cursor-pointer' alt="Instagram Logo" />
      </a>
      <a onMouseOver={() => setHoverFb('white')} onMouseLeave={() => setHoverFb('blue')} href='https://www.facebook.com/mentebiblicamdq' target='_blank'>
        <img src={`/logo/redes/fb-${hoverFb}.png`} className='w-[30px] h-[30px] hover:scale-105 cursor-pointer' alt="Instagram Logo" />
      </a>
    </div>
    </div>
  )
}

export default FollowOptions