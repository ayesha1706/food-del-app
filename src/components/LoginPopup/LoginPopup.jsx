// loginpopup.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './loginpopup.css';

const LoginPopup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/login', { username, password });
            if (response.status === 200) {
                setMessage('Login successful!');
                window.location.href = '/';
            } else {
                setMessage('Invalid username or password.');
            }
        } catch (error) {
            setMessage('An error occurred during login.');
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="login-popup">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            {message && <p className="message">{message}</p>}
            <div className="register-link">
                <p>Don't have an account? <a href="/register">Register here</a></p>
            </div>
        </div>
    );
};

export default LoginPopup;
