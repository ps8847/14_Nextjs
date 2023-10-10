'use client';

import Link from "next/link";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1>Basic Routing | Make New Page</h1>
    <Link href="/login">Go to Login Page</Link>
    <br />
    <Link href="/about">Go to About Page</Link>
    </main>
  )
}
