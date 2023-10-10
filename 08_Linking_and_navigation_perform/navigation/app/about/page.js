'use client';

import { useRouter } from "next/navigation";

export default function About() {

    const router = useRouter();

  return (
    <div>
        <h1>About page</h1>
        <button onClick={() => router.push('/')}>Go to Home Page</button>
    </div>
  )
}
