"use client";
export default function DeleteUser({ id }) {
  const deleteuser = async () => {
    let result = await fetch("http://localhost:3000/api/users" + id, {
      method: "delete",
    });
    result = await result.json();
    if (result.success) {
      alert("user is deleted");
    } else {
      alert("error in delete user");
    }
  };
  return <button onClick={deleteuser}>Delete</button>;
}
