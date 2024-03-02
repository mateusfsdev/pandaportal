import Newss from '../assets/news.png'
import Camp from '../assets/buscar.png'
import Server from '../assets/server.png'
import Search from '../assets/camp.png'
import About from '../assets/about.png'


export function Menu() {
  return(
    <div className='bg-stone-800 flex  rounded-md justify-center items-center  mx-4  h-[380px]'>

      <div className='flex ring-transparent hover:bg-stone-700/40 flex-col items-center p-4 m-2 w-[360x] bg-stone-700/20 rounded-lg h-[240px] justify-center'>
        <img src={Newss} alt="" className='w-[160px]' />
        <h1 className="text-purple-500 my-2 font-bold">
         ESports News
        </h1>
      </div>
      <div className='flex flex-col items-center p-4 m-2 w-[360x] hover:bg-stone-700/40 bg-stone-700/20 rounded-lg h-[240px] justify-center'>
        <img src={Camp} alt="" className='w-[160px]' />
        <h1 className="text-purple-500 my-2 font-bold">
          Camps 
        </h1>
      </div>
      <div className='flex flex-col items-center p-4 m-2 w-[360x] hover:bg-stone-700/40 bg-stone-700/20 rounded-lg h-[240px] justify-center'>
        <img src={Server} alt="" className='w-[160px]' />
        <h1 className="text-purple-500 my-2 font-bold">
          servers parceiros
        </h1>
      </div>
      <div className='flex flex-col items-center p-4 m-2 w-[360x] hover:bg-stone-700/40 bg-stone-700/20 rounded-lg h-[240px] justify-center'>
        <img src={Search} alt="" className='w-[160px]' />
        <h1 className="text-purple-500 my-2 font-bold">
          Buscar time
        </h1>
      </div>
      <div className='flex flex-col items-center p-4 m-2 w-[360x] hover:bg-stone-700/40 bg-stone-700/20 rounded-lg h-[240px] justify-center'>
        <img src={About} alt="" className='w-[160px]' />
        <h1 className="text-purple-500 my-2 font-bold">
          Quem somos
        </h1>
      </div>

    </div>
  )

}