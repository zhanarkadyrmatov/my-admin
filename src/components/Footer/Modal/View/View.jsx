import React from 'react'
import s from './View.module.scss'
import { useForm } from 'react-hook-form';
export default function View() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    return (
        <div className={s.container}>
            <div className={s.user_modal}>
                <div className={s.user_background}>
                    <div className={s.user_window}>
                        <div className={s.block_grid}>
                            <form onSubmit={handleSubmit((data) => console.log(data))}>
                                <input {...register('firstName')} />
                                 <input {...register('lastName', { required: true })} />
                                {errors.lastName && <p>Last name is required.</p>}
                                <input {...register('age', { pattern: /\d+/ })} />
                                {errors.age && <p>Please enter number for age.</p>}
                                <input type="submit" />
                            </form>
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
    )
}
