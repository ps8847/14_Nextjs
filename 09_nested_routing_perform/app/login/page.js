'use client';

import { useRouter } from "next/navigation";

export default function Login() {

  const router = useRouter();

  return (
    <div>
        <h1>Login Page</h1>
        <button onClick={() => router.push('/')}>Go to Home Page</button>
        <br />
        <button onClick={() => router.push('/login/loginstudent')}>Go to Login Student</button>
        <br />
        <button onClick={() => router.push('/login/loginteacher')}>Go to Login Teacher</button>
    </div>
  )
}
