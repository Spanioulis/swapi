import React from 'react';
import '../styles/LogIn.css';

export const LogIn = () => {
    const users = JSON.parse(localStorage.getItem('Users'));
    console.log(users);

    const handleSubmit = (event) => {
        console.log(event);
    };
    const handleChangeInput = (event) => {
        console.log(event);
    };

    return (
        <div className="login-container">
            <form className="login-card" onSubmit={handleSubmit}>
                <input
                    className="login-input"
                    type="email"
                    id="email"
                    name="emailAddress"
                    placeholder="Email Address"
                    onChange={handleChangeInput}
                    required
                />
                <input
                    className="login-input"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChangeInput}
                    required
                />
                <button className="btn-login-form" type="submit">
                    Log in
                </button>
            </form>
        </div>
    );
};
