import React from 'react'
import { useState } from 'react';
import s from './Login.module.scss'
import register from '../../img/register.png'
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
export default function Logins() {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (<div className={s.Register_back}>
        <div className={s.wrap}>
            <div className='mx-auto max-w-[475px] w-full h-[544px] bg-white p-12 rounded-md shadow-md'>
                <div className='flex justify-center mb-4'>
                    <img className='w-150 h-47' src={register} alt="" />
                </div>
                <h4 className='text-center leading-6 text-lg font-semibold'>Sign up your account</h4>
                <div className={s.input_grid}>
                    <div className='grid grid-rows mb-6'>
                        <label htmlFor="" for='Username'>Username</label>
                        <input className='rounded-md h-11 border border-gray-300 px-5 transition duration-150 focus:border-orange-500 focus:outline-none' type="name" placeholder='Enter username' />
                    </div>
                    <div className='grid grid-rows relative mb-6'>
                        <label htmlFor="" for='Username'>Email</label>
                        <input className='rounded-md h-11 border border-gray-300 px-5 transition duration-150 focus:border-orange-500 focus:outline-none' type="email" placeholder="hello@example.com" />
                    </div>
                    <div className='grid grid-rows relative mb-6'>
                        <label htmlFor="" >Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='rounded-md h-11 border border-gray-300 px-5 transition duration-150 focus:border-orange-500 focus:outline-none'
                            placeholder='Enter password'
                            
                        />
                        <span className='absolute right-[10px] top-3/4 transform -translate-y-1/2 cursor-pointer w-6 h-6' onClick={togglePasswordVisibility}>
                            {showPassword ?
                                <IoEyeSharp /> : <FaEyeSlash />}
                        </span>
                    </div>
                    <div className='block w-full'>
                        <a href=""><button className='max-w-415 w-full h-12 bg-red-600 text-white px-5 rounded-md font-medium text-sm'>Sign up</button></a>
                    </div>
                    <div className='mt-4'>
                        <p className='leading-8 mt-0 mb-4 text-gray-600 text-xs'>Already have an account? <a className='text-red-600 text-xs' href="">Sign in</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
