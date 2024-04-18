import React from 'react'
import s from './blockslick.module.scss'
import { FaCommentsDollar } from "react-icons/fa";
import image5 from '../../../img/image5.png'
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Blockslick() {
    return (
        <div>
            <div className={s.image_title_text}>
                <img src={image5} alt="" />
                <h4>UI Designer</h4>
                <p>Bubbles Studios</p>
                <span><FaMapMarkerAlt />Manchester, England</span>
                <span><FaCommentsDollar />$ 2,000 - $ 2,500</span>
            </div>
        </div>
    )
}
