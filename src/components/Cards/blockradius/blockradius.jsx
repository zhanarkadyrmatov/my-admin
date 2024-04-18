import React from 'react'
import s from './blockradius.module.scss'
import image6 from '../../../img/image6.png'

export default function Blockradius() {
    return (
        <div className={s.img_radius}>
            <img src={image6} alt="" />
            <h5>Engineer</h5>
            <span>5,050 Vacancy</span>
        </div>
    )
}
