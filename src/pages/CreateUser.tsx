import React, { useState } from 'react';
import {User} from "../types/User";
import {createUser} from "../api/userApi";

export default function CreateUser() {
    const [form, setForm] = useState<User>({
        gender: '',
        email: '',
        address: '',
        userType: '',
        status: '',
        username: '',
        first_name: '',
        last_name: '',
        date_of_birth: '',
        phone_number: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await createUser(form);
        alert('User created successfully!');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">Create User</h1>
            <input type="text" name="username" placeholder="Username" value={form.username} onChange={handleChange} className="input" required />
            <input type="text" name="first_name" placeholder="First Name" value={form.first_name} onChange={handleChange} className="input" required />
            <input type="text" name="last_name" placeholder="Last Name" value={form.last_name} onChange={handleChange} className="input" required />
            <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="input" required />
            <input type="text" name="phone_number" placeholder="Phone Number" value={form.phone_number} onChange={handleChange} className="input" required />
            <input type="text" name="address" placeholder="Address" value={form.address} onChange={handleChange} className="input" required />
            <input type="date" name="date_of_birth" value={form.date_of_birth} onChange={handleChange} className="input" required />
            <select name="gender" value={form.gender} onChange={handleChange} className="input" required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <select name="userType" value={form.userType} onChange={handleChange} className="input" required>
                <option value="">Select User Type</option>
                <option value="CUSTOMER">CUSTOMER</option>
                <option value="ADMIN">ADMIN</option>
            </select>
            <select name="status" value={form.status} onChange={handleChange} className="input" required>
                <option value="">Select Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
            </select>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Create</button>
        </form>
    );
}
