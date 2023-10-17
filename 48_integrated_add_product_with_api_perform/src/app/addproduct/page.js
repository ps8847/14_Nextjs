"use client"
import { useState } from "react"
import "../style.css"
export default function Page(){

    const [name , setname] = useState("")
    const [price , setprice] = useState("")
    const [color , setcolor] = useState("")
    const [company , setcompany] = useState("")
    const [category , setcategory] = useState("");

    const addProduct = async () => {
        let result = await fetch("http://localhost:3000/api/products" , {
            method:"POST",
            body:JSON.stringify({name,price,color,company,category})
        })

        result = await result.json();
        if(result.success){
            alert("new product added")
        }
    }

    return (
        <div>
            <h1>Add Product</h1>
            <input className="input" value={name} onChange={(e) => setname(e.target.value)} type="text" placeholder="Enter product name" />
            <input className="input"  value={price} onChange={(e) => setprice(e.target.value)} type="text" placeholder="Enter price" />
            <input className="input"  value={color} onChange={(e) => setcolor(e.target.value)} type="text" placeholder="Enter color" />
            <input className="input"  value={company} onChange={(e) => setcompany(e.target.value)} type="text" placeholder="Enter company" />
            <input className="input"  value={category} onChange={(e) => setcategory(e.target.value)} type="text" placeholder="Enter category" />
            <button className="btn" onClick={addProduct}>Add Product</button>
        </div>
    )
}