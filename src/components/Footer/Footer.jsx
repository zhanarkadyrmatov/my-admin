import React from 'react'
import s from './Footer.module.scss'
export default function Footer() {
    return (
        <div>
            <div className={`${s.footer_all}  dark:bg-[#212130]`}>
                <div className={s.footer}>
                    <p>Copyright © Designed & Developed by <a>DexignLab</a> 2023</p>
                </div>
            </div>
        </div>
    )
} 

