import Link from "next/link";

async function getUsers() {
  let data = await fetch("http://localhost:3000/api/users");
  data = await data.json();

  return data;
}

export default async function Page() {
  const users = await getUsers();
  return (
    <div>
      <h2>User List</h2>
      {users.map((item) => (
        <div>
          <Link href={`users/${item.id}`}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
}
