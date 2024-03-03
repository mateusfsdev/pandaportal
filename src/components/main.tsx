import { Aside } from "./forum";
import { About } from "./craque";

export function Main() {
  return (
    <main className='grid  grid-cols-[360px_minmax(auto,_1fr)] mx-4 h-[620px] gap-4'>
      <Aside />
      <About />
    </main>
)
}