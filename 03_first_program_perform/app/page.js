export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <User name="raju1"/>
      <User name="raju2"/>
      <User name="raju3"/>
     <h1>Home Page</h1>
    </main>
  )
}

const User = (props) => {
  return (
    <div>
      <h2>USER name is {props.name}</h2>
    </div>
  )
}