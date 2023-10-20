"use client"
import Image from 'next/image'
import { useState } from 'react'
// import styles from './page.module.css'

export default function Home() {

  const [file,setFile] = useState();

  let submitImage = async (e) => {
    e.preventDefault();

    console.log(file);

    const data = new FormData();
    data.set('file',file);

    let result = await fetch("api/upload" , {
      method:"POST",
      body:data
    })

    result = await result.json()

    if(result.success){
      alert("file uploaded")
    }
    console.log(result);
  }

  return (
    <main>
      <h1>Upload Image</h1>
      <form onSubmit={submitImage}>
        <input type='file' name='file' onChange={(e) => setFile(e.target.files?.[0])}/>
        <button type='submit'>uPLOAD iMAGE</button>
      </form>
    </main>
  )
}
