
import React, { useState } from 'react';
import './page.css';
import cm from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../store/slice/user.slice';
function Login() {
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
   const dispatch = useDispatch()
   const {data, status , error} = useSelector((state) => state.user)
console.log(error, 'test');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.value) {
            setEmail((i) => ({ ...i, error: 'Email is required' }));
        }
        if (!password.value) {
            setPassword((i) => ({ ...i, error: 'Password is required' }));
        }

        dispatch(fetchUser({identifier: email.value, password: password.value}))
    };
    return (
        <div className="Login" style={{ marginTop: '30px' }}>
            <div className="Login__container">
            <p className="Login__p--hint">Войти вы можете только зарегистрированным <br /> пользователем</p>
             {error?.detail && <p className="Login__p--error">{error.detail}</p>}  

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