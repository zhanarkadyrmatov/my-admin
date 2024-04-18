import React from 'react'
import s from './homepage.module.scss'
import image5 from '../../../img/image5.png'

export default function Homepage() {
    return (
        <div className={s.block_img_flex}>
            <img src={image5} alt="" />
            <div className={s.grid_text}>
                <h4>Ziro Studios Inc.</h4>
                <h5>Desgin Team Agency</h5>
            </div>
        </div>
    )
}
