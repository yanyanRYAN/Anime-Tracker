import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile(){
    const [userData, setUserData] = useState({ users: []});

    useEffect(() => {
        async function fetchData(){
            const result =  await axios.get('http://localhost:5000/user');

            setUserData({ users: result.data});
        }
        fetchData().then(() => console.log('success'));
    }, []);

    return(
        <div>
            <h1>Profile</h1>
            {userData.users.map(user => (
                <li key={user._id}>{user.username}</li>
            ))}
        </div>
    );
}

export default Profile;