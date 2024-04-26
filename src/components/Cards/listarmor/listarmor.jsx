import React from 'react'
import { BiSolidEdit } from "react-icons/bi";
import { LiaTimesSolid } from "react-icons/lia";
import s from './listarmor.module.scss'
export default function Listarmor() {
    return (
        <div>
            <div className={s.listGrid}>
                <div className={s.nomer}>
                    <p>1</p>
                </div>
                <div className={s.title}>
                    <p>	About Us</p>
                </div>
                <div className={s.status}>
                    <p>	Published</p>
                </div>
                <div className={s.modified}>
                    <p>18 Feb, 2024</p>
                </div>
                <div className={s.actions}>
                    <button className={s.icon}><BiSolidEdit size={20} color='#fff' /></button>
                    <button className={s.icon2}><LiaTimesSolid size={20} color='#fff' /></button>
                </div>
            </div>
        </div>
    )
}
