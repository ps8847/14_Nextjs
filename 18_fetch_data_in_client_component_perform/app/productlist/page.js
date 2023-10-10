"use client"

import { useEffect , useState } from "react"

export default function Page(){

    const [product , setProduct] = useState([]);

    useEffect( () => {

        let func = async () => {
            let data = await fetch("https://dummyjson.com/products")
    
            data = await data.json();
            console.log(data);
    
            setProduct(data.products)

        }

        func();
    } , [])

    return (
        <div>
            <h1>Product List</h1>
            {
                product.map((item)=> 
                    <h3>{item.title}</h3>
                )
            }
        </div>
    )
}