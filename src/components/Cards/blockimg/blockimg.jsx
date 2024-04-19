import React from 'react'
import image5 from '../../../img/image5.png'
import s from './bloxkimg.module.scss'
export default function BlockImg() {
    return (
            <div className={s.flex_group}>
                <img src={image5} alt="" />
                <div className={s.title_left}>
                    <h4>Bubles Studios have 5 available positions for you</h4>
                    <span>8min ago</span>
                </div>
            </div>
    )
}
