import Newss from '../assets/news.png'
import Camp from '../assets/buscar.png'
import Server from '../assets/server.png'
import Search from '../assets/camp.png'
import About from '../assets/about.png'


export function News() {
  return(
    <div className='bg-stone-800 flex  rounded-md justify-center items-center  mx-4  h-[380px]'>

      <div className='flex ring-transparent flex-col items-center p-4 m-2 w-[360x] bg-stone-700/20 rounded-lg h-[240px] justify-center
       hover:ring-purple-500'>
        <img src={Newss} alt="" className='w-[160px]' />
        <h1 className="text-gray-100 font-bold">
         ESports News
        </h1>
      </div>
      <div className='flex flex-col items-center p-4 m-2 w-[360x] bg-stone-700/20 rounded-lg h-[240px] justify-center'>
        <img src={Camp} alt="" className='w-[160px]' />
        <h1 className="text-gray-100 font-bold">
          Camps 
        </h1>
      </div>
      <div className='flex flex-col items-center p-4 m-2 w-[360x] bg-stone-700/20 rounded-lg h-[240px] justify-center'>
        <img src={Server} alt="" className='w-[160px]' />
        <h1 className="text-gray-100 font-bold">
          servers parceiros
        </h1>
      </div>
      <div className='flex flex-col items-center p-4 m-2 w-[360x] bg-stone-700/20 rounded-lg h-[240px] justify-center'>
        <img src={Search} alt="" className='w-[160px]' />
        <h1 className="text-gray-100 font-bold">
          Buscar time
        </h1>
      </div>
      <div className='flex flex-col items-center p-4 m-2 w-[360x] bg-stone-700/20 rounded-lg h-[240px] justify-center'>
        <img src={About} alt="" className='w-[160px]' />
        <h1 className="text-gray-100 font-bold">
          Quem somos
        </h1>
      </div>

    </div>
  )

}