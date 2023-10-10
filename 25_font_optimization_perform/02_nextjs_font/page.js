import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight:'100',
  subsets:['latin'],
  display:'swap'
})
export default function Home() {
  return (
   <main>
    <h1>Font optimization in nextjs</h1>
   <h1 className={roboto.className}>font weight with netxjs fotn feature</h1>
   </main>
  )
}
