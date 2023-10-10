import { API_BASE_URL } from "@/config/constant";

export default function Home() {

  return (
    <main>
      {
        process.env.NODE_ENV === 'development' ? <h1>you are on development mode</h1> : <h1>you are on production mode</h1>
      }
    Home Page 

<h1>
    {API_BASE_URL}

</h1>
    </main>
  )
}
