import React from 'react'
import s from './CartPages.module.scss'
import Cardblock  from '../../components/Cards/cards.block/card-block';
export default function CartbBlock() {
    return (
        <div>
            <div className={s.CartBlock}>
                <div className={s.cart_block_mini}>
                    <Cardblock/>
                    <Cardblock/>
                    <Cardblock/>
                    <Cardblock/>
                    <Cardblock/>
                    <Cardblock/>
                    <Cardblock/>
                    <Cardblock/>
                </div>
            </div>
        </div>
    )
}
