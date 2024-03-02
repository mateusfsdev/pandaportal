import Craque from '../assets/players/jdSw3fnHRByCAaYC-Screenshot_10.png'

export function About(){
  return(
    <div className='col-span-2 rounded-md md:col-span-1 flex items-start  justify-center bg-stone-800  '>
      <div className='items-center justify-center'>
        <h2 className=" text-purple-500 m-4  text-center font-bold">Craque da galera </h2>
      <div>
        <img src={Craque} alt="" className=' rounded-lg m-4 w-[560px]'/>
      </div>
      <div className='justify-ml-8'>
        <h2 className='text-purple-500  text-center  text-3xl font-bold'>Gabriel 'fallen' toledo</h2>
      </div>
    </div>
  </div>
  )

}