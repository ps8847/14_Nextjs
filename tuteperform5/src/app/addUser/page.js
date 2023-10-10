"use client"

import { useState } from "react"
import "../../style.css"
export default function Page(){

    const [name,setname] = useState("")
    const [age,setage] = useState("")
    const [email,setemail] = useState("")

    const addUser = async () => {
        let response = await fetch("http://localhost:3000/api/users" , {
            method:"Post",
            body:JSON.stringify({name,age,email})
        })

        response = await response.json();
        if(response.success){
            alert("new user added")
        } else {
            alert("error occured")
        }
        console.log(response);
    }
    return(
        <div className="add-user">
            <h1>Add New User</h1>

            <input type="text" placeholder="Enter Name" onChange={(e) => setname(e.target.value)} value={name} className='input-field'/>
            <input type="text" placeholder="Enter Age" onChange={(e) => setage(e.target.value)} value={age} className='input-field'/>
            <input type="text" placeholder="Enter Email" onChange={(e) => setemail(e.target.value)} value={email} className='input-field'/>
            
            <button className="btn" onClick={addUser}>Add User</button>
        </div>
    )
}