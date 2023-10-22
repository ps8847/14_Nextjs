"use client"
import { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "../redux/slice"

export default function AddUsers() {

   const nameRef = useRef()
   const dispatch = useDispatch()

    const userDispatch = () => {
        dispatch(addUser(nameRef.current.value))
    }

  return (
    <div className="add-user">
        <h3>AddUsers</h3>
        <input type="text" placeholder="Add New User" className="add-user-input" ref={nameRef}/>
        <button className="add-user-btn" onClick={userDispatch}>Add User</button>

    </div>
  )
}
