import getUsers from "../../../../services/getUsers";

export default async function Page(props){

    const getUserList = getUsers();
    const users = await getUserList;

    const currentID = props.params.userId;

    const userData = users[currentID-1];

    return(
        <div>
            <h2>User detail page</h2>
            <h4>{userData.id}</h4>
            <h4>{userData.name}</h4>
            <h4>{userData.website}</h4>
        </div>
    )
}

export async function generateStaticParams(){
    const getUserList = getUsers();
    const users = await getUserList;

    return users.map(user=>({
        userId:user.id.toString()
    }))
}