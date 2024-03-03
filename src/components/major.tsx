import Invite from '../assets/players/invited.jpg'
import Majoram from '../assets/players/majoras.png'
import Majorsa from '../assets/players/majorasia.png'
import Majoreu from '../assets/players/majoreupore.png'

export function Pro() {
  return(
    <div className=' bg-stone-800 flex flex-col rounded-md justify-between mx-4   h-[920px]'>
      <div>
        <h1 className=" text-center text-2xl font-bold text-purple-500 m-2">Welcome the First Major to Counter Strike 2</h1>
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          
          <div className="col-span-1  md:col-span-1 rounded-lg my-4 ml-4 bg-stone-900/50 h-[360px]">
            <div className=' flex flex-col items-center justify-center'>
              <h1 className='text-purple-500 font-bold m-2 text-2xl'>Invited teams</h1>
              <img src={Invite} alt="" className='border-purple-600 border-2 rounded-lg m-4 h-[250px]'/>
            </div>
          </div>

          <div className="col-span-1 items-center justify-center m-2  md:col-span-1 rounded-lg my-4 mr-4  bg-stone-900/50 h-[360px]">
          <div className=' flex flex-col items-center justify-center'>
              <h1 className='text-purple-500 font-bold m-2 text-2xl'>RMR Americas</h1>
              <img src={Majoram} alt="" className='border-purple-600 border-2 rounded-lg m-4 h-[280px]'/>
            </div>
          </div>
          <div className="col-span-1 items-center justify-center m-2  md:col-span-1 rounded-lg my-4 mr-4  bg-stone-900/50 h-[360px]">
          <div className=' flex flex-col items-center justify-center'>
              <h1 className='text-purple-500 font-bold m-2 text-2xl'>RMR Europe</h1>
              <img src={Majoreu} alt="" className='border-purple-600 border-2 rounded-lg m-4 h-[280px]'/>
            </div>
          </div>
          <div className="col-span-1 items-center justify-center m-2  md:col-span-1 rounded-lg my-4 mr-4  bg-stone-900/50 h-[360px]">
          <div className=' flex flex-col items-center justify-center'>
              <h1 className='text-purple-500 font-bold m-2 text-2xl'>RMR Asia</h1>
              <img src={Majorsa} alt="" className='border-purple-600 border-2 rounded-lg m-4 h-[280px]'/>
            </div>
          </div>

        </div>
        <h2 className="text-center m-4 text-gray-200">saiba quem esta tramsmitindo as partidas {' '}
        <a target="_blank" className="text-purple-400 font-bold underline" href="https://twitch.tv/gaules">aqui!</a> 🎬📽</h2>
      </div>
  </div>
  )

}