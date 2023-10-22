"use client"
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../redux/slice"

export default function Page(){

    const userData = useSelector((data)=>data.users)

  const dispatch = useDispatch()
  return (
    <div className="display-user">

        <h3>Remove User Page</h3>
   
          {userData.map((item) => (
            <div className="user-item" key={item.id}><span>{item.name}</span> <button onClick={()=>dispatch(removeUser(item.id))}>Remove User</button></div>
          ))}

    
        
    </div>
  )
}