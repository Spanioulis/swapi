import React, { useEffect, useState } from 'react';
import '../styles/SignUp.css';

export const SignUp = () => {
    const [users, setUsers] = useState(localStorage.getItem('Users') || []);
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: ''
    });

    const handleChangeInput = (event) => {
        const {
            target: { value, name }
        } = event;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const exists = users.find((user) => user.emailAddress === form.emailAddress);
        if (exists) {
            console.log('Existe este usuario');
            return;
        } else {
            setUsers([...users, form]);
            console.log('usuario nuevo');
        }
    };

    useEffect(() => {
        localStorage.setItem('Users', JSON.stringify(users));
    }, [users]);

    return (
        <div className="signin-container">
            <form className="signin-card" onSubmit={handleSubmit}>
                <input
                    className="signin-input"
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleChangeInput}
                    required
                />
                <input
                    className="signin-input"
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handleChangeInput}
                    required
                />
                <input
                    className="signin-input"
                    type="email"
                    id="email"
                    name="emailAddress"
                    placeholder="Email Address"
                    onChange={handleChangeInput}
                    required
                />
                {/* {exists && <p>Este usuario ya existe</p>} */}
                <input
                    className="signin-input"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChangeInput}
                    required
                />
                <button className="btn-signin-form" type="submit">
                    Create Account
                </button>
            </form>
        </div>
    );
};
