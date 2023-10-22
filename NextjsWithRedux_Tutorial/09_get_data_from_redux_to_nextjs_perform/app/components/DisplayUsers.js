"use client"
import { useSelector } from "react-redux"

export default function DisplayUsers() {

  const userData = useSelector((data)=>data.users)
  return (
    <div className="display-user">

        <h3>DisplayUsers</h3>
   
          {userData.map((item) => (
            <div className="user-item">{item.name}</div>
          ))}

    
        
    </div>
  )
}
