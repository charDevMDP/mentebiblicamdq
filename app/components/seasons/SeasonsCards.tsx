
import seasons from '@/public/json/seasons.json'
import SeasonCard from './SeasonCard'


const SeasonsCards = () => {


  return (
    <div className='h-full w-full justify-center items-center'>
      <div className='flex flex-col md:flex-row md:w-[80%] lg:w-[60%] mx-auto h-full justify-center gap-5 items-center w-full'>
        {
          seasons.map((season:any) => {
              return <SeasonCard season={season} />
          })
        }
      </div>
      
    </div>
  )
}

export default SeasonsCards