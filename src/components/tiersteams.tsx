import Furia from '../assets/teams/c9.png'
import Imp from '../assets/teams/vit.png'
import Case from '../assets/teams/natus.png'
import Legacy from '../assets/teams/virtus.png'
import Los from '../assets/teams/heroic.png'
import Ninez from '../assets/teams/faze.png'
import Spirit from '../assets/teams/Spirit.png'

export function TierSteams() {
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
      <img
    className='w-[140px] mr-10'
       src={Spirit} alt="" />
  
      
    </div>
  )

}