import React, { useEffect, useState } from "react";
import Usercards from "./Usercards";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <div className="App">
            <div className="user-cards">
                {users.map(user => (
                    <Usercards key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
}

export default Users;