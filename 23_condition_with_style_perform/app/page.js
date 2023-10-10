"use client"

import { useState } from "react";
import style from "./style.module.css";

export default function Home() {

  const [color , setColor] = useState("red");

  const {red} = style;
  return (
   <main>
    <h1 className={color==="red" ? style.red : style.green}>Style and css with Next Js</h1>
    <h3 id={style.orange}>Heading 3</h3>
    <button onClick={() => setColor("green")}>Update Color</button>

    {/* // to apply at multi place we can either do this :  */}
    <h4 className={style.red}>Dummy text</h4>
    <h4 className={style.red}>Dummy text</h4>
    <h4 className={style.red}>Dummy text</h4>
    <h4 className={style.red}>Dummy text</h4>

    {/* // or this  */}
    <h4 className={red}>Dummy text</h4>
    <h4 className={red}>Dummy text</h4>
    <h4 className={red}>Dummy text</h4>
    <h4 className={red}>Dummy text</h4>

   </main>
  )
}
