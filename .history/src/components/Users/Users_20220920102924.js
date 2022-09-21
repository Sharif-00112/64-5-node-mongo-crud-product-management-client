import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:3001/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    return (
        <div>
            <h2>Available Users: {users.length}</h2> 

            <ul>
                {
                    users.map(user => <li>
                        {user.name} :: {user.email}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Users;