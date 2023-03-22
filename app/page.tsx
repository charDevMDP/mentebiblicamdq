'use client'
import { useRef } from 'react'
import Header from './components/Header'
import ListBtnPodcastes from './components/ListBtnPodcastes'
import Presentation from './components/Presentation'
import styles from './page.module.css'


export default function Home() {

  const presentacion = useRef<null | HTMLDivElement>(null)


  const goToTop = () => {
    console.log('34232432')
    presentacion.current?.scrollIntoView({ behavior: "smooth" })

};

  return (
    <div className='background-gradient'>

      <div className='text-white h-screen'>
          <Header />
          <div onClick={() => goToTop()} className={styles.arrow + ' ' + 'md:hidden'}></div>
      </div>

      <div className='text-white h-screen md:hidden' ref={presentacion}>
        <div className='h-screen flex justify-center items-center flex-col px-5'> 
          <Presentation/>
          <ListBtnPodcastes/>
        </div>
      </div>

    </div>
  )
}
