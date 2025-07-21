import React, { useEffect, useState } from "react";
import "./Style/ViewUser.css";

function ViewUser() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error("Error fetching users:", error));
    }, []);
    const handleDetailClick = (user) => {
    
    alert(
      `User Details:\n\n` +
      `Name: ${user.name}\n` +
      `Username: ${user.username}\n` +
      `Email: ${user.email}\n` +
      `Phone: ${user.phone}\n` +
      `Website: ${user.website}`
    );
  };

    return (
        <div className="userlist">
            <h1>User List</h1>
            <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                            <td><button onClick={() => handleDetailClick(user)}>
                                Details</button></td>
                                </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ViewUser; 

