import Vit from '../assets/teams/vit.png'
import Navi from '../assets/teams/natus.png'
import Virtus from '../assets/teams/virtus.png'
import Heroic from '../assets/teams/heroic.png'
import Faze from '../assets/teams/faze.png'
import Spirit from '../assets/teams/Spirit.png'
import Nip from '../assets/teams/nip.png'
import Ast from '../assets/teams/astr.png'

export function TierSteams() {
  return(
    <div className='
    bg-stone-800 flex items-center rounded-md justify-between  mx-4  h-[240px]'>
    
    <div className='flex ring-transparent hover:bg-stone-700/40 flex-col items-center  m-2 w-[360x] bg-stone-700/20 rounded-lg h-[200px] justify-center'>
    <img
   className='w-[70px] m-4 hover:transform hover:scale-125'
       src={Nip} alt=""
       />
      </div>
    
    <div className='flex ring-transparent hover:bg-stone-700/40 flex-col items-center  m-2 w-[360x] bg-stone-700/20 rounded-lg h-[200px] justify-center'>

    <img
     className='w-[70px] m-4 hover:transform hover:scale-125'
       src={Spirit} alt=""
       />
      </div>
    
    <div className='flex ring-transparent hover:bg-stone-700/40 flex-col items-center  m-2 w-[360x] bg-stone-700/20 rounded-lg h-[200px] justify-center'>

    <img
  className='w-[70px] m-4 hover:transform hover:scale-125'
       src={Faze} alt=""
       />
      </div>
    
    <div className='flex ring-transparent hover:bg-stone-700/40 flex-col items-center  m-2 w-[360x] bg-stone-700/20 rounded-lg h-[200px] justify-center'>

    <img
  className='w-[70px] m-4 hover:transform hover:scale-125'
       src={Heroic} alt=""
       />
      </div>
    
    <div className='flex ring-transparent hover:bg-stone-700/40 flex-col items-center  m-2 w-[360x] bg-stone-700/20 rounded-lg h-[200px] justify-center'>
    <img
  className='w-[70px] m-4 hover:transform hover:scale-125'
       src={Virtus} alt=""
       />
      </div>
    
    <div className='flex ring-transparent hover:bg-stone-700/40 flex-col items-center  m-2 w-[360x] bg-stone-700/20 rounded-lg h-[200px] justify-center'>
    <img
   className='w-[70px] m-4 hover:transform hover:scale-125'
       src={Navi} alt=""
       />
      </div>
    
    <div className='flex ring-transparent hover:bg-stone-700/40 flex-col items-center  m-2 w-[360x] bg-stone-700/20 rounded-lg h-[200px] justify-center'>
    <img
  className='w-[70px] m-4 hover:transform hover:scale-125'
       src={Vit} alt=""
       />
      </div>
    <div className='flex ring-transparent hover:bg-stone-700/40 flex-col items-center  m-2 w-[360x] bg-stone-700/20 rounded-lg h-[200px] justify-center'>
    <img
  className='w-[70px] m-4 hover:transform hover:scale-125'
       src={Ast} alt=""
       />
      </div>

      
    </div>
  )

}