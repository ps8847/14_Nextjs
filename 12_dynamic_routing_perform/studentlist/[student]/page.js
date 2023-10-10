'use client'

export default function Student({params}){
    return (
        <div>
            <h1>Student List</h1>
           Id : {params.student}
        </div>
    )
}