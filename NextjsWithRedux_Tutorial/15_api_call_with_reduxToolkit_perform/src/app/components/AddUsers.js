"use client"
import { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "../redux/slice"
import Link from "next/link"

export default function AddUsers() {

  return (
    <div className="add-user">

        <Link href="/apiUsers">Go to API user page</Link>
    </div>
  )
}
