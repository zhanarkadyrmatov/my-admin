import React from 'react'
import s from './Recent.module.scss'
import { BsThreeDotsVertical } from "react-icons/bs";
import { TiArrowSortedUp } from "react-icons/ti";
import BlockImg from '../../Cards/blockimg/blockimg';
export default function Recent() {
    return (
        <div>
            <div className={s.block_all_scroll}>
                <div className={s.btn_title}>
                    <h3>Recent Activity</h3>
                    <div className={s.flex_bread}>
                        <button>oldest <TiArrowSortedUp className={s.icon_arrow} /></button>
                        <BsThreeDotsVertical />
                    </div>
                </div>
                <div className={s.grid_blocks}>
                    <BlockImg />
                    <BlockImg />
                    <BlockImg />
                    <BlockImg />
                    <BlockImg />
                    <BlockImg />
                    <BlockImg />
                </div>
                <div className={s.view_button}>
                    <button>View More</button>
                </div>
            </div>
        </div>
    )
}
