import Htmltech from '../assets/htmltech.png'
import Csstech from '../assets/csstech.png'
import Reactt from '../assets/reacttech.png'
import Javascript from '../assets/javascript.png'
import Nativee from '../assets/reactnativetech.png'
import Tailwindd from '../assets/tailwindcss.png'

export function Skills() {
  return(
    <div className='
    bg-stone-800 flex items-center rounded-md justify-between  mx-4  h-[240px]'>
      <img
      className='w-[160px] h-[200px]'
       src={Htmltech} alt="" />
      <img
      className='w-[160px] h-[200px]'
       src={Csstech} alt="" />
      <img
      className='w-[160px] h-[200px]'
       src={Javascript} alt="" />
      <img
      className='w-[160px] h-[200px]'
       src={Reactt} alt="" />
      <img
      className='w-[160px] h-[200px]'
       src={Nativee} alt="" />
      <img
      className='w-[160px] h-[200px]'
       src={Tailwindd} alt="" />
  
      
    </div>
  )

}