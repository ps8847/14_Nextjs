"use client";
import Link from "next/link";
import "./login.css";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathName = usePathname();
  return (
    <div>
      <ul className="login-menu">
        {pathName !== "/login/loginteacher" ? (
          <>
            <li>
              <h4>Login Navbar</h4>
            </li>
            <li>
              <Link href={"/login"}>Login MAIN</Link>
            </li>
            <li>
              <Link href={"/login/loginstudent"}>Login Student</Link>
            </li>
            <li>
              <Link href={"/login/loginteacher"}>Login Teacher</Link>
            </li>
          </>
        ) : null}
      </ul>
      {children}
    </div>
  );
}
