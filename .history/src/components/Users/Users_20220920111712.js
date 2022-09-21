import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:3001/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [users])

    //DELETE an user
    const handleDeleteUser = id =>{
        const url = `http://localhost:3001/users/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('Deleted Successfully!')

                // update the UI (i've set dependency instead of it)
                // const remainingUsers = users.filter(user => user._id !== id);
                // setUsers(remainingUsers);
            }
        })
    }

    return (
        <div>
            <h2>Available Users: {users.length}</h2> 

            <ul>
                {
                    users.map(user => <li key={user._id}>
                        {user.name} :: {user.email}
                        <button onClick={() => handleDeleteUser(user._id)}>X</button>
                        <button>Update</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Users;