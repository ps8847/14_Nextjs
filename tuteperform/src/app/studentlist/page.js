import Link from "next/link";

export default function StudentList(){
    return (
        <div>
            <h1>Student List</h1>
            <ul>
                <li><Link href="studentlist/1">Prince</Link></li>
                <li><Link href="studentlist/2">Ankush</Link></li>
                <li><Link href="studentlist/3">Bharat</Link></li>
                <li><Link href="studentlist/4">Raghav</Link></li>
            </ul>
        </div>
    )
}