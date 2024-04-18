import React from 'react'
import s from './Available.module.scss'
import Slider from "react-slick";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TiArrowSortedUp } from "react-icons/ti";
import Blockslick from '../../Cards/blockslick/blockslick'
export default function Available() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2.50,
        slidesToScroll: 2,
    };
    return (
        <div>
            <div className={s.block_img_slick}>
                <div className={s.btn_title}>
                    <h3>Available Jobs For You</h3>
                    <div className={s.flex_bread}>
                        <button>Newest<TiArrowSortedUp className={s.icon_arrow} /></button>
                        <BsThreeDotsVertical />
                    </div>
                </div>
                <div className={s.blocks_slick}>
                    <Slider className={s.className} {...settings} >
                        <Blockslick />
                        <Blockslick />
                        <Blockslick />
                        <Blockslick />
                        <Blockslick />
                    </Slider>
                </div>
            </div>
        </div>
    )
}
