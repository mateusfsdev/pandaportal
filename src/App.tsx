
import { Southteams } from './components/southteams'
import { TierSteams } from './components/tiersteams'
import { Contact } from './components/contact'
import { Fotter } from './components/footer'
import { Header } from './components/header'
import { Main } from './components/main'
import { Menu } from './components/menu'
import { Pro } from './components/projects'
import './index.css'
import { Stats } from './components/stats'

export default function App() {

  return (
    <div
    className='w-full h-vh bg-stone-900 flex flex-col gap-4  justify-between'>
      <Header/>
      <Menu/>
      <Southteams/>
      <Main/>
      <TierSteams/>
      <Stats/>
      <Pro/>
      <Contact/>

      <Fotter/>
    </div>

  )
}
