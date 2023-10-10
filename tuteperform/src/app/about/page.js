'use client';

import { useRouter } from "next/navigation";

export default function About() {

    const router = useRouter();

  return (
    <div>
        <h1>About page</h1>
        <button onClick={() => router.push('/')}>Go to Home Page</button>
<br />
        <button onClick={() => router.push('/about/aboutcollege')}>Go to About College</button>
<br />
        <button onClick={() => router.push('/about/aboutstudent')}>Go to About Student</button>
<br />
    </div>
  )
}
