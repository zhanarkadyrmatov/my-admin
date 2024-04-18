import React from 'react'
import s from './Franklin.module.scss'
import image from '../../Home/Franklin/Franklin.module.scss'
import { FaMapMarkerAlt } from "react-icons/fa";
import Box from '@mui/material/Box';
import { PieChart } from '@mui/x-charts/PieChart';

export default function Franklin() {
    const pieParams = { height: 200, };
    return (
        <div>
            <div className={s.flex_wrap}>
                <div className={s.cart_block_width}>
                    <div className={s.flex_img}>
                        <img src={image} alt="" />
                        <div className={s.grid_text}>
                            <h3>Franklin Jr</h3>
                            <p>UI / UX Designer</p>
                            <span><FaMapMarkerAlt color='#888888' className={s.icon} />Medan, Sumatera Utara - ID</span>
                        </div>
                        <div className={s.btn4}>
                            <a href=''>Update Profile</a>
                        </div>
                    </div>
                    <div className={s.statig}>
                        <h3>Skills</h3>
                        <Box flexGrow={2}>
                            <div className={s.Skills} style={{ display: 'flex' }}>
                                <div className={s.width_hr}>
                                    <div>
                                        <div style={{ width: '240px', height: '8px', backgroundColor: '#f5f5f5', borderRadius: '10px' }}>
                                            <div style={{ width: '210px', height: '8px', backgroundColor: '#d653c8', borderRadius: '10px' }}>
                                            </div>
                                        </div>
                                        <div className={s.list_styk}>
                                            <li >figma</li>
                                            <p>90%</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{ width: '240px', height: '8px', backgroundColor: '#f5f5f5', borderRadius: '10px' }}>
                                            <div style={{ width: '160px', height: '8px', backgroundColor: '#1D92DF', borderRadius: '10px' }}>
                                            </div>
                                        </div>
                                        <div className={s.list_styk}>
                                            <li >Adobe XD</li>
                                            <p>68%</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{ width: '240px', height: '8px', backgroundColor: '#f5f5f5', borderRadius: '10px' }}>
                                            <div style={{ width: '200px', height: '8px', backgroundColor: '#3772FE', borderRadius: '10px' }}>
                                            </div>
                                        </div>
                                        <div className={s.list_styk}>
                                            <li >Photoshop</li>
                                            <p>85%</p>
                                        </div>
                                    </div>
                                </div>
                                <PieChart
                                    series={[{ data: [{ value: 10 }, { value: 15 }, { value: 20 }] }]}
                                    {...pieParams}
                                />
                            </div>
                        </Box>
                    </div>

                </div>
            </div>
        </div>
    )
}
