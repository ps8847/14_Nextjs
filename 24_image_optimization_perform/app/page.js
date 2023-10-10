
import Image from "next/image"
import Profile from "../../public/vercel.svg"
export default function Home() {
  return (
   <main>
    <h1>Image optimization in nextjs</h1>
    <Image src={Profile} height={500} width={500}/>
    {/* <img src={Profile} /> // will not work here like this  */}
    <img src={Profile.src} /> 

    <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" height={200} width={200}/>
   </main>
  )
}
