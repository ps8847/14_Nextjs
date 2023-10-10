import {redirect} from "next/navigation"

export default function Page() {
    redirect("/")
    return (
      <main>
      User Page
      </main>
    )
  }
  