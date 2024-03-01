import { Aside } from "./aside";
import { About } from "./about";

export function Main() {
  return (
    <main className='grid  grid-cols-[360px_minmax(auto,_1fr)] mx-4 h-[420px] gap-4'>
      <Aside />
      <About />
    </main>
)
}