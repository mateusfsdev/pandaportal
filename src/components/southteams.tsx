import Furia from '../assets/teams/furia.png'
import Imp from '../assets/teams/imp.png'
import Case from '../assets/teams/case.png'
import Legacy from '../assets/teams/legacy.png'
import Los from '../assets/teams/los.png'
import Ninez from '../assets/teams/9z.png'
import Liq from '../assets/teams/liquid.png'
import Cloud from '../assets/teams/c9.png'

export function Southteams() {
  return(
    <div className='
    bg-stone-800 flex items-center rounded-md justify-around  mx-4  h-[180px]'>
      
      
      <div className='flex ring-transparent hover:bg-stone-700/40 flex-col items-center   m-2 w-[360x] bg-stone-700/20 rounded-lg h-[120px] justify-center'>
        <img
        className='w-[70px] m-4 hover:transform hover:scale-125 '
        src={Los} 
        />
      </div>

      <div className='flex ring-transparent hover:bg-purple-500/10 flex-col items-center  m-2 w-[360x] bg-stone-700/20 rounded-lg h-[120px] justify-center'>  
        <img
        className='w-10 m-6 hover:transform hover:scale-125'
        src={Case} 
        />
       </div>

       <div className='flex ring-transparent hover:bg-purple-500/10 flex-col items-center  m-2 w-[360x] bg-stone-700/20 rounded-lg h-[120px] justify-center'>  
        <img
        className='w-14 m-4 hover:transform hover:scale-125'
        src={Legacy} 
        />
       </div>
      
      <div className='flex ring-transparent hover:bg-purple-500/10 flex-col items-center  m-2 w-[360x] bg-stone-700/20 rounded-lg h-[120px] justify-center'>
        <img
        className='w-[70px] m-4 hover:transform hover:scale-125'
        src={Furia} 
         />
      </div>

      <div className='flex ring-transparent hover:bg-purple-500/10 flex-col items-center  m-2 w-[360x] bg-stone-700/20 rounded-lg h-[120px] justify-center'>
        <img
        className='w-14 m-4 hover:transform hover:scale-125'
        src={Imp} 
        />
      </div>


      <div className='flex ring-transparent hover:bg-purple-500/10 flex-col items-center  m-2 w-[360x] bg-stone-700/20 rounded-lg h-[120px] justify-center'>
        <img
        className='w-[60px] m-4 hover:transform hover:scale-125'
        src={Ninez} 
        />
      </div>
  
      <div className='flex ring-transparent hover:bg-purple-500/10 flex-col items-center  m-2 w-[360x] bg-stone-700/20 rounded-lg h-[120px] justify-center'>
        <img
        className='w-[50px] m-4 hover:transform hover:scale-125'
        src={Liq}
        />
      </div>

      <div className='flex ring-transparent hover:bg-purple-500/10 flex-col items-center  m-2 w-[360x] bg-stone-700/20 rounded-lg h-[120px] justify-center'>
        <img
        className='w-[50px] m-4 hover:transform hover:scale-125'
        src={Cloud} 
        />
      </div>
  
      
    </div>
  )

}