"use client"

import { useRouter } from "next/navigation";

export default function DeleteProduct({id}) {
    const router  = useRouter()
    let deleterecord = async () => {
        let response = await fetch("http://localhost:3000/api/products/"+id , {
            method:"DELETE"
        })

        response = await response.json();
        if(response.success){
            alert("Product deleted")
            router.push("/products")
        }
    }
  return <button onClick={deleterecord}>Delete</button>
}
