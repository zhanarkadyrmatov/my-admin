import React, { useState } from 'react';
import './page.css';
import cm from 'classnames';
function Login() {
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.value) {
            setEmail((i) => ({ ...i, error: 'Email is required' }));
        }
        if (!password.value) {
            setPassword((i) => ({ ...i, error: 'Password is required' }));
            
        }
    };
    return (
        <div className="Login" style={{ marginTop: '30px' }}>
            <div className="Login__container">
                <label>
                    <p>Email</p>
                    <input
                        onChange={(e) => setEmail((i) => ({  value: e.target.value }))}
                        value={email.value}
                        type="email"
                        placeholder="Email"
                        className={cm('Login__input', { 'Login__input--error': email.error })}
                    />
                    {email.error && <p className="Login__p">{email.error}</p>}
                </label>
                <label>
                    <p>Password</p>
                    <input
                        onChange={(e) => setPassword((i) => ({  value: e.target.value }))}
                        value={password.value}
                        type="password"
                        placeholder="Password"
                        className={cm('Login__input', { 'Login__input--error': password.error })}
                        />
                    {password.error && <p className="Login__p">{password.error}</p>}
                </label>
                <button type="submit" onClick={handleSubmit} >
                    Login
                </button>
            </div>
        </div>
    );
}

export default Login;