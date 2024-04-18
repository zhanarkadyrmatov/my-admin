import React from 'react'
import s from './View.module.scss'
export default function View() {
    return (
        <div className={s.container}>
            <div className={s.user_modal}>
              <div >
                     {/* <div className={s.header_context}>
                    <h1>New Job</h1>
                    {/* <div className={s.all_icon}>
                        <div className={s.div_icon}><CiMail className={s.mail} color='#fff' /></div>
                        <div className={s.div_icon}><FaPhoneFlip className={s.mail} /></div>
                        <div className={s.div_icon}>
                            <h3 className={s.mail}>i</h3>
                        </div>
                    </div> */}
                {/* </div> * / } */}
                <div className={s.user_background}>
                    <div className={s.user_window}>
                        <div className={s.block_grid}>
                            <h3>Company Name <span>*</span></h3>
                            <input type="text" placeholder='Name' />
                        </div>
                        <div className={s.block_grid}>
                            <h3>Position <span>*</span></h3>
                            <input type="text" placeholder='Name' />
                        </div>
                        <div className={s.block_grid}>
                            <h3>Job Category<span>*</span></h3>
                            <input type="text" placeholder='Name' />
                        </div>
                        <div className={s.block_grid}>
                            <h3>Job Type <span>*</span></h3>
                            <input type="text" placeholder='Name' />
                        </div>
                        <div className={s.block_grid}>
                            <h3>No. of Vancancy <span>*</span></h3>
                            <input type="text" placeholder='Name' />
                        </div>
                        <div className={s.block_grid}>
                            <h3>Select Experience <span>*</span></h3>
                            <input type="text" placeholder='Name' />
                        </div>
                        <div className={s.block_grid}>
                            <h3>Posted Date <span>*</span></h3>
                            <input type="text" placeholder='Name' />
                        </div>
                        <div className={s.block_grid}>
                            <h3>Last Date To Apply <span>*</span></h3>
                            <input type="text" placeholder='Name' />
                        </div>
                        <div className={s.block_grid}>
                            <h3>Close Date <span>*</span></h3>
                            <input type="text" placeholder='Name' />
                        </div>
                        <div className={s.block_grid}>
                            <h3>Select Gender: <span>*</span></h3>
                            <input type="text" placeholder='Name' />
                        </div>
                        <div className={s.block_grid}>
                            <h3>Company Name *</h3>
                            <input type="text" placeholder='Name' />
                        </div>
                        <div className={s.block_grid}>
                            <h3>Company Name *</h3>
                            <input type="text" placeholder='Name' />
                        </div>
                        <div className={s.block_grid}>
                            <h3>Company Name *</h3>
                            <input type="text" placeholder='Name' />
                        </div>
                        <div className={s.block_grid}>
                            <h3>Company Name *</h3>
                            <input type="text" placeholder='Name' />
                        </div>
                        <div className={s.block_grid}>
                            <h3>Company Name *</h3>
                            <input type="text" placeholder='Name' />
                        </div>
                        <div className={s.block_grid}>
                            <h3>Company Name *</h3>
                            <input type="text" placeholder='Name' />
                        </div>
                        <div className={s.block_grid}>
                            <h3>Company Name *</h3>
                            <input type="text" placeholder='Name' />
                        </div>
                        <div className={s.block_grid}>
                            <h3>Company Name *</h3>
                            <input type="text" placeholder='Name' />
                        </div>
                    </div>
                    <div className={s.big_input}>
                        <h3>Description: <span>*</span></h3>
                        <textarea name="" id="" cols="30" rows="10">
                        </textarea>
                    </div>
                </div>
              </div>
            </div>
        </div>
    )
}
