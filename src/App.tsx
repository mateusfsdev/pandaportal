
import { Contact } from './components/contact'
import { Fotter } from './components/footer'
import { Header } from './components/header'
import { Main } from './components/main'
import { News } from './components/news'
import { Pro } from './components/projects'
import { Southteams } from './components/southteams'
import { TierSteams } from './components/tiersteams'
import './index.css'

export default function App() {

  return (
    <div className='
    w-full h-vh bg-stone-900 flex flex-col gap-4  justify-between'>
      <Header/>
      <News/>
      <Main/>
      <Southteams/>
      <TierSteams/>
      <Pro/>
      <Contact/>

      <Fotter/>
    </div>

  )
}
