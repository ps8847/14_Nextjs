"use client";
import { useEffect, useState } from "react";
import "../../../../style.css"
export default function Page({params}){

    let id  = params.userid;

    const [name,setname] = useState("")
    const [age,setage] = useState("")
    const [email,setemail] = useState("")

    useEffect(() => {
        const gteuserDetails = async () => {
            let data = await fetch("http://localhost:3000/api/users/"+id);
            data = await data.json()

            setname(data.result.name)
            setage(data.result.age)
            setemail(data.result.email)
        }

        gteuserDetails();
    } , [])

    const updateUser = async () => {

        let result = await fetch("http://localhost:3000/api/users/"+id , {
            method:"PUT",
            body:JSON.stringify({name,age,email})
        })

        result = await result.json();
        console.log(result);

        if(result.success){
            alert("user updated succcessfully")
        } else {
            alert("please try with valid input")
        }
    }
    return(
         <div className="add-user">
            <h1>Update User</h1>

            <input type="text" placeholder="Enter Name" onChange={(e) => setemail(e.target.value)} value={name} className='input-field'/>
            <input type="text" placeholder="Enter Age" onChange={(e) => setage(e.target.value)} value={age} className='input-field'/>
            <input type="text" placeholder="Enter Email" onChange={(e) => setemail(e.target.value)} value={email} className='input-field'/>
            
            <button className="btn" onClick={updateUser}>Add User</button>
        </div>
    )
}