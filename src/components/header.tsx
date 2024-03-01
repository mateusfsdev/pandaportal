import Logo from '../assets/logo.png'


export function Header() {
  return (
      <header className='bg-stone-950/50 h-24 gap-4 flex items-center justify-center'>
        <img src={Logo} alt="logo" className='w-14 h-14 p-1 '>
          
        </img>
        <h1 className='text-purple-500 text-2xl font-bold '>
        Portal Panda Gamming </h1>
      </header>

  )
}

