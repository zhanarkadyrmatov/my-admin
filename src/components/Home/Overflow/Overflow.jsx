import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import s from './Overflow.module.scss'
import HomeCover from '../../Cards/hompage-card/homepage';
export default function Overflow() {
    return (
        <div>
            <div className={s.Block_context_img}>
                <div className={s.context_burger}>
                    <h3>Featured Companies</h3>
                    <BsThreeDotsVertical className={s.icon_point} />
                </div>
                <div className={s.block_context_grid}>
                    <HomeCover /><HomeCover /><HomeCover />
                    <HomeCover /><HomeCover /><HomeCover />
                    <HomeCover /><HomeCover /><HomeCover />
                    <HomeCover /><HomeCover /><HomeCover />
                </div>
                <div className={s.view_button}>
                    <button>View More</button>
                </div>
            </div>
        </div>
    )
}
