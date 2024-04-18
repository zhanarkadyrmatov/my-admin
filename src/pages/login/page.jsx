import React, { useState } from 'react';
import './page.scss';
import cm from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../store/slice/user.slice';
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import register from '../../img/register.png'
function Login() {
    const [email, setEmail] = useState({ value: '', error: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState({ value: '', error: '' });
    const dispatch = useDispatch()
    const { data, status, error } = useSelector((state) => state.user)
    console.log(error, 'test');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.value) {
            setEmail((i) => ({ ...i, error: 'Email is required' }));
        }
        if (!password.value) {
            setPassword((i) => ({ ...i, error: 'Password is required' }));
        }
        dispatch(fetchUser({ identifier: email.value, password: password.value }))

       
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className="Login" style={{ marginTop: '30px' }}>
            <div className="Login__container">
                {error?.detail && <p className="Login__p--error">{error.detail}</p>}
                <div>
                    <img src={register} alt="" />
                </div>
                <div className='register_title'>
                    <h4>Sign in your account
                    </h4>
                </div>
                <label>
                    <p>Email</p>
                    <input
                        onChange={(e) => setEmail((i) => ({ value: e.target.value }))}
                        value={email.value}
                        type="email"
                        placeholder="Email"
                        className={cm('Login__input', { 'Login__input--error': email.error })}
                    />
                    {email.error && <p className="Login__p">{email.error}</p>}
                </label>
                <label className='relative'>
                    <p>Password</p>
                    <input
                        onChange={(e) => setPassword((i) => ({ value: e.target.value }))}
                        value={password.value}
                        placeholder="Password"
                        type={showPassword ? 'text' : 'password'}
                        onClick={(e) => setPassword(e.target.value)}
                        className={cm('Login__input', { 'Login__input--error': password.error })}
                    />
                    <span className='absolute right-[5px] top-[75%] transform -translate-y-1/2 cursor-pointer w-6 h-6' onClick={togglePasswordVisibility}>
                        {showPassword ?
                            <IoEyeSharp /> : <FaEyeSlash />}
                    </span>
                    {password.error && <p className="Login__p">{password.error}</p>}
                </label>
                <div className='remember_all'>
                    <div className='remember'>
                        <input type="checkbox" />
                        <label htmlFor="">Remember my preference</label>
                    </div>
                    <p>Forgot Password?</p>
                </div>
                <button className='btn' type="submit" onClick={handleSubmit} >
                    Sign In
                </button>
                <div className='register_context'>
                    <h4>Don't have an account? <span>Sign up</span></h4>
                </div>
            </div>
        </div>
    );
}

export default Login;