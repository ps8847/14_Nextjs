'use client';
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1>Basic Routing | Make New Page</h1>

    <button onClick={() => router.push('/login')}>Go to Login Page</button>
    <br />
    <button onClick={() => router.push('/about')}>Go to About Page</button>
    </main>
  )
}
