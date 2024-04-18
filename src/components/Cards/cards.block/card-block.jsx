import React from 'react'
import s from './card-block.module.scss'
import image3 from '../../../img/image3.png'
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Cardblock({}) {
 
    return (
        <div className={`${s.cartbBlock_flex} dark:bg-[#212130]  dark:text-[#fff]`}>
            <div className={s.flex_block}>
                <img src={image3} alt="" />
                <div>
                    <h2>Bubble Studios</h2>
                    <h4>Desgin Team Agency </h4>
                    <div className={s.Block_flex}>
                        <FaMapMarkerAlt color='red' />
                        <p>Manchester, England</p>
                    </div>
                </div>
            </div>
            <button className=' dark:bg-[#212130] dark:text-[#f93a0b]  dark:text-[#fff]'>6 Jobs Available</button>
        </div>
    )
}
