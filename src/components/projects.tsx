export function Pro() {
  return(
    <div className=' bg-stone-800 flex flex-col rounded-md justify-between mx-4   h-[480px]'>
    <div>
      <h1 className=" text-center text-2xl font-bold text-purple-500 m-2">Welcome the First Major to Counter Strike 2</h1>
      <div className="grid  grid-cols-2 gap-4">
        <div className="col-span-1  md:col-span-1 rounded-lg my-4 ml-4 bg-stone-900/50 h-[360px]">

        </div>

        <div className="col-span-1  md:col-span-1 rounded-lg my-4 mr-4  bg-stone-900/50 h-[360px]">

        </div>

      </div>
      <h2 className="text-center text-gray-200">saiba quem esta tramsmitindo as partidas {' '}
      <a target="_blank" className="text-purple-400 font-bold underline" href="https://twitch.tv/gaules">aqui!</a> 🎬📽</h2>
    </div>
  </div>
  )

}