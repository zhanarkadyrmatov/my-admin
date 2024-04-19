import React, { useEffect, useState } from 'react';
import './page.scss';
import cm from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../store/slice/user.slice';
import { IoEyeSharp } from 'react-icons/io5';
import { FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();
    useEffect(() => {
        if (status === 'fulfilled') {
            navigate('/');
        }
    }, [status])
    return (
        <div className="Login" style={{ marginTop: '30px' }}>
            <div className="Login__container">
                <p className="Login__p--hint">Войти вы можете только зарегистрированным <br /> пользователем</p>
                {error?.detail && <p className="Login__p--error">{error.detail}</p>}

                <label>
                    <p>Email</p>
                    <input
                        onChange={(e) => setEmail((i) => ({ value: e.target.value }))}
                        value={email.value}
                        type="email"
                        placeholder="Email"
                        className={cm('Login__input', 'dark:bg-[#212130]  dark:text-[#fff]', { 'Login__input--error': email.error })}
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
                        className={cm('Login__input', 'dark:bg-[#212130]  dark:text-[#fff]', { 'Login__input--error': password.error })}
                    />
                    <span className='absolute right-[5px] top-[75%] transform -translate-y-1/2 cursor-pointer w-6 h-6' onClick={togglePasswordVisibility}>
                        {showPassword ?
                            <IoEyeSharp /> : <FaEyeSlash />}
                    </span>
                    {password.error && <p className="Login__p">{password.error}</p>}
                </label>
                <button type="submit" onClick={handleSubmit} >
                    Login
                </button>
                <div className='register_context'>
                    <h4>Don't have an account? <span>Sign up</span></h4>
                </div>
            </div>
        </div>
    );
}

export default Login;