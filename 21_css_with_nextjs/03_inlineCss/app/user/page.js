"use client"

import { useState } from "react"

export default function Page(){

    const [h3Style , seth3Style] = useState({backgroundColor:'green'})
    return (
        <div>
            <h1 style={{backgroundColor:"yellow"}}>User page</h1>
            <h2>User page</h2>
            <h3 style={h3Style}>Heading 3</h3>
            <button onClick={() => seth3Style({backgroundColor:"blue"})}>change color</button>
        </div>
    )
}