import Header from './components/Header'
import ListBtnPodcastes from './components/ListBtnPodcastes'
import Presentation from './components/Presentation'
import styles from './page.module.css'


export default function Home() {
  return (
    <div className='background-gradient'>

      <div className='text-white h-screen'>
          <Header />
      </div>

      <div className='text-white h-screen'>
        <div className='flex justify-center flex-col px-5'> 
          <Presentation/>
          <ListBtnPodcastes/>
        </div>
      </div>

    </div>
  )
}
