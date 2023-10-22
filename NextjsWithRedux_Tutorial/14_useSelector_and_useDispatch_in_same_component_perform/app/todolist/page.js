"use client"
import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodos } from "../redux/todoSlice"

export default function Page(){

    let todoref = useRef()
    const dispatch = useDispatch()
    const todoDtaa = useSelector(data=>data.todosData.todos)

    console.log(todoDtaa);
    return (
        <div>
            <h3>Add Todo</h3>
            <input type="text" placeholder="add new task" ref={todoref}/>
            <button onClick={() => dispatch(addTodos(todoref.current.value))}>Add todo</button>

            <br />
            <br />
            <h5>Todo List</h5>
            {
                todoDtaa.length && todoDtaa.map((item)=>(
                    <h6 key={item.id}>{item.name}</h6>
                ))
            }
        </div>
    )
}