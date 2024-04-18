import React from 'react'
import s from './Data.module.scss'
import { CiMail } from "react-icons/ci";
import { FaPhoneFlip } from "react-icons/fa6";
import { green } from '@mui/material/colors';
import { FcBriefcase } from "react-icons/fc";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { FaFolder } from "react-icons/fa";
import { TfiPencil } from "react-icons/tfi";
import { IoEyeSharp } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";

export default function Data() {
    return (
        <div>
            <div className={s.data_modal}>
                <div className={s.container}>
                    <div className={s.data_flex}>
                        <a href=""><FaArrowLeft size={30} color='#ffa755' className={s.arrow} /></a>
                        <div className={s.data_modal_title}>
                            <h4>Overview</h4>
                            <div className={s.block_context}>
                                <li><label htmlFor="">Job Title:</label><p>April 30,2023</p></li>
                                <li><label htmlFor="">Experience:</label><p>2yrs Exp</p></li>
                                <li><label htmlFor="">Vacancy:</label><p>10</p></li>
                                <li><label htmlFor="">Job Type:</label><p>Full-Type</p></li>
                                <li><label htmlFor="">Posted Date:</label> <p>13-6-2023</p></li>
                                <li><label htmlFor="">Last Apply</label><p>12-8-2023</p></li>
                                <li><label htmlFor="">Last Apply</label><p>12-8-2023</p></li>
                                <li><label htmlFor="">Last Apply</label><p>12-8-2023</p></li>
                            </div>
                        </div>
                        <div className={s.data_two_php}>
                            <div className={s.data_two_grid}>
                                <h4>PHP Developer</h4>
                                <div className={s.icon_text_flex}>
                                    <span><FcBriefcase color='#ffc107' /><a>Apcd company</a></span>
                                    <span><FaMapMarkerAlt color='#ffc107' /><a>USA</a></span>
                                    <span><IoEyeSharp color='#ffc107' /><a>View</a></span>
                                </div>
                            </div>
                            <div className={s.card_body}>
                                <h4>Description</h4>
                                <div className={s.card_p}>
                                    <p><FaDotCircle color='#ffc107' /> We are Looking For a PHP Doveloper, who is must be familiar with the PHP fundamentals& PHP <br /> framwork. Experience with Laravel & mixs, Livewir</p>
                                    <p><FaDotCircle color='#ffc107' /> We are Looking For a PHP Doveloper, who is must be familiar with the PHP fundamentals& PHP <br /> framwork. Experience with Laravel & mixs, Livewir</p>
                                    <p><FaDotCircle color='#ffc107' /> We are Looking For a PHP Doveloper, who is must be familiar with the PHP fundamentals& PHP <br /> framwork. Experience with Laravel & mixs, Livewir</p>
                                    <p><FaDotCircle color='#ffc107' /> We are Looking For a PHP Doveloper, who is must be familiar with the PHP fundamentals& PHP <br /> framwork. Experience with Laravel & mixs, Livewir</p>
                                    <p><FaDotCircle color='#ffc107' /> We are Looking For a PHP Doveloper, who is must be familiar with the PHP fundamentals& PHP <br /> framwork. Experience with Laravel & mixs, Livewir</p>
                                </div>
                                <hr />
                            </div>
                            <div className={s.card_end}>
                                <h4>Job Details</h4>
                                <div className={s.block_context2}>
                                    <div>
                                        <li><label htmlFor="">Job Title:</label><p>April 30,2023</p></li>
                                        <li><label htmlFor="">Experience:</label><p>2yrs Exp</p></li>
                                        <li><label htmlFor="">Vacancy:</label><p>10</p></li>
                                        <li><label htmlFor="">Job Type:</label><p>Full-Type</p></li>
                                    </div>
                                    <div>
                                        <li><label htmlFor="">Posted Date:</label> <p>13-6-2023</p></li>
                                        <li><label htmlFor="">Last Apply</label><p>12-8-2023</p></li>
                                        <li><label htmlFor="">Last Apply</label><p>12-8-2023</p></li>
                                        <li><label htmlFor="">Last Apply</label><p>12-8-2023</p></li>
                                    </div>
                                </div>
                            </div>
                            <div className={s.span_flex_2}>
                                <div className={s.span_flex}>
                                    <span>Job ID: #8976542</span>
                                    <span>Posted By <strong>Company/</strong> 12-01-2023</span>
                                </div>
                                <hr className={s.hr_width} />
                            </div>
                            <div className={s.btn_primary}>
                                <a href=""> <CiCircleCheck fontWeight={400} className={s.icon3} />Apply</a>
                                <a className={s.a_flex} href=""> <CiCircleCheck fontWeight={400} className={s.icon3} />Share Job</a>
                                <a className={s.a_flexs} href=""> <CiCircleCheck fontWeight={400} className={s.icon3} />Print</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
