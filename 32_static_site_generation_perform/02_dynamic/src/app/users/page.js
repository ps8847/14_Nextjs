import Link from "next/link";
import getUsers from "../../../services/getUsers"

export default async function Page(){

    const getUserList = getUsers();
    const users = await getUserList;

    return(
        <div>
            <h1>User List </h1>
            {
                users.map((item) => (
                    <h2 key={item.id}>
                        <Link href={`/users/${item.id}`}>{item.name}</Link>
                    </h2>
                ))
            }
        </div>
    )
}