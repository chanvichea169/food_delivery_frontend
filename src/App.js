import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/users/19')
            .then(response => setUser(response.data))
            .catch(error => console.error('Error fetching user:', error));
    }, []);

    if (!user) return <p>Loading user...</p>;

    return (
        <div>
            <h1>User Profile</h1>
            <ul>
                <li><strong>ID:</strong> {user.id}</li>
                <li><strong>Username:</strong> {user.username}</li>
                <li><strong>First Name:</strong> {user.first_name}</li>
                <li><strong>Last Name:</strong> {user.last_name}</li>
                <li><strong>Email:</strong> {user.email}</li>
                <li><strong>Phone:</strong> {user.phone_number}</li>
                <li><strong>Address:</strong> {user.address}</li>
                <li><strong>User Type:</strong> {user.userType}</li>
                <li><strong>Status:</strong> {user.status}</li>
                <li><strong>Date of Birth:</strong> {user.date_of_birth}</li>
                <li><strong>Created At:</strong> {new Date(user.created_at).toLocaleString()}</li>
                <li><strong>Updated At:</strong> {new Date(user.updated_at).toLocaleString()}</li>
                <li><strong>Created By:</strong> {user.created_by}</li>
                <li><strong>Updated By:</strong> {user.updated_by}</li>
            </ul>
        </div>
    );
}

export default App;
