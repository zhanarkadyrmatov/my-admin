import React from 'react'
import image4 from '../../../img/image4.png'
import s from './Static.module.scss'
export default function Static() {
    return (
        <div>
            <div className={`${s.Homepages_block_mini} dark:bg-[#212130] dark:text-[#8888]`}>
                <div className={s.Homepages_grid}>
                    <div className={s.cart_block}>
                        <div className={s.line_heith}>
                            <h1>342 <span>+0.5%</span></h1>
                            <p>Interview Schedules</p>
                        </div>
                        <img className='dark:bg-[#ffff] dark:text-[#8888]`' src={image4} alt="" />
                    </div>
                    <div className={s.cart_block}>
                        <div className={s.line_heith}>
                            <h1>342 <span>+0.5%</span></h1>
                            <p>Interview Schedules</p>
                        </div>
                        <img src={image4} alt="" />
                    </div>
                    <div className={s.cart_block}>
                        <div className={s.line_heith}>
                            <h1>342 <span>+0.5%</span></h1>
                            <p>Interview Schedules</p>
                        </div>
                        <img src={image4} alt="" />
                    </div>
                    <div className={s.cart_block}>
                        <div className={s.line_heith}>
                            <h1>342 <span>+0.5%</span></h1>
                            <p>Interview Schedules</p>
                        </div>
                        <img src={image4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
