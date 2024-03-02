export function Aside() {
  return(
    <div className='col-span-2  md:col-span-1 rounded-md justify-center flex  bg-stone-800 '>
      <div>
        <h1
        className="text-purple-500 font-bold my-6"
        >Forum da comunidade</h1>
        <div>
          <div
          className="bg-stone-900 text-gray-200 p-4 rounded-lg h-[460px] w-72"
          >chat</div>
          <div className="flex  mt-2  gap-4">
            <input
            className="bg-stone-900 outline-2 outline-purple-500 rounded-md p-1 "
            type="text"
            placeholder="digite aqui"
            name="publicar"
            id="publi"         
            />
  
            <button
            className="bg-stone-900  hover:bg-purple-500/30 border-1 w-20 h-8 rounded-md  text-gray-200 hover:font-bold text-sm "
              >enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}