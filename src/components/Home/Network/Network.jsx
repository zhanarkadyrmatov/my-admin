import React from 'react'
import s from './Network.module.scss'
import { BsThreeDotsVertical } from "react-icons/bs";
import Blockradius from '../../Cards/blockradius/blockradius';
export default function Network() {
    return (
        <div>
            <div className={s.prososser}>
                <div className={s.btn_title}>
                    <h3>Network</h3>
                    <div className={s.flex_bread}>
                        <BsThreeDotsVertical />
                    </div>
                </div>
                <div className={s.block_radius_map}>
                    <Blockradius />
                    <Blockradius />
                    <Blockradius />
                    <Blockradius />
                </div>
            </div>
        </div>
    )
}
