export default function Home() {

  console.log(process.env);
  console.log(process.env.NODE_ENV);

  // self made
  console.log(process.env.SERVER_PASSWORD);

  return (
    <main>
      {
        process.env.NODE_ENV === 'development' ? <h1>you are on development mode</h1> : <h1>you are on production mode</h1>
      }
    Home Page
    </main>
  )
}
