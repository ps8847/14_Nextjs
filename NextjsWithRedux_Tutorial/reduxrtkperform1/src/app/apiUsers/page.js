"use client"

import { useDispatch, useSelector } from "react-redux"
import { fetchApiUsers } from "../redux/slice"
import { useEffect } from "react";

export default function page() {

    let dispatch  =  useDispatch();

    const data = useSelector((data)=>data.usersData.usersAPIData);
    console.log(data);

    useEffect(() => {
        dispatch(fetchApiUsers())
    },[])
  return (
    <div>
        <h1>User list from API</h1>
    
        {
          data.map((item) => {
                return <h4>{item.name}</h4>
          })
        }
    </div>
  )
}
