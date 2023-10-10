'use client';

export default function Home() {

  const InnerComponent = () => {
    return (
      <h1>inenr component</h1>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>events ,  function and state </h1>

        // whats the differnece between them both 
      <InnerComponent />
      {InnerComponent()}
    </main>
  )
}
