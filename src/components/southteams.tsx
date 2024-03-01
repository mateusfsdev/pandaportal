import Furia from '../assets/teams/furia.png'
import Imp from '../assets/teams/imp.png'
import Case from '../assets/teams/case.png'
import Legacy from '../assets/teams/legacy.png'
import Los from '../assets/teams/los.png'
import Ninez from '../assets/teams/9z.png'

export function Southteams() {
  return(
    <div className='
    bg-stone-800 flex items-center rounded-md justify-between  mx-4  h-[240px]'>
      <img
      className='w-[80px] ml-10'
       src={Case} alt="" />
      <img
      className='w-[120px]'
       src={Legacy} alt="" />
      <img
      className='w-[140px]'
       src={Furia} alt="" />
      <img
      className='w-[110px]'
       src={Imp} alt="" />
      <img
     className='w-[140px]'
       src={Los} alt="" />
      <img
    className='w-[140px] mr-10'
       src={Ninez} alt="" />
  
      
    </div>
  )

}