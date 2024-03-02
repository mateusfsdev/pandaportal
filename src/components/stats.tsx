
import { Players } from "./players";
import { Teams } from "./teams";

export function Stats() {
  return (
    <main className='grid  grid-cols-[360px_minmax(auto,_1fr)] mx-4 h-[620px] gap-4'>
      <Players />
      <Teams />
    </main>
)
}