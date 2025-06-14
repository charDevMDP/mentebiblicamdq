
import seasons from '@/public/json/seasons.json'
import SeasonCard from './SeasonCard'


const SeasonsCards = () => {


  return (
    <div className='h-full w-full justify-center items-center pt-10'>
      <div className='flex flex-col lg:w-[80%] mx-auto h-full justify-center gap-5 lg:gap-8 items-center w-full'>
        {
          seasons.map((season:any,idx) => {
              return <SeasonCard season={season} key={idx} />
          })
        }
      </div>
      
    </div>
  )
}

export default SeasonsCards