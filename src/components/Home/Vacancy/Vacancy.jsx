import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import s from './Vacancy.module.scss'
export default function Vacancy() {
    const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
    const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
    const psData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
    const xLabels = [
        'Page A',
        'Page B',
        'Page C',
        'Page D',
        'Page E',
        'Page F',
        'Page G',
    ];
    return (
        <div>
            <div className={s.vacans_statig}>
                <div className={`${s.block_grid} dark:bg-[#212130] dark:text-[#fffff]`}>
                    <div className={s.flex_text_button}>
                        <h3>Vacancy Stats</h3>
                        <div className={s.flex_button}>
                            <button>Daily</button>
                            <button>Weekly</button>
                            <button className={s.btn7}>Monthly</button>
                        </div>
                    </div>
                    <div className={s.nav_link_li}>
                        <nav>
                            <li><button className={s.border_radius} ></button> Application Sent</li>
                            <li><button className={s.border_radius_blue}></button>Interviews</li>
                            <li><button className={s.border_radius_red}></button> butRejected</li>
                        </nav>
                    </div>
                    <div className={s.statig_margin}>
                        <LineChart
                            width={650}
                            height={370}
                            series={[
                                { data: pData, id: 'pvId' },
                                { data: uData, id: 'uvId' },
                                { data: psData, id: 'psvId' },
                            ]}
                            xAxis={[{ scaleType: 'point', data: xLabels }]}
                            sx={{
                                '.MuiLineElement-root, .MuiMarkElement-root': {
                                    strokeWidth: 3,
                                },
                                '.MuiMarkElement-root:not(.MuiMarkElement-highlighted)': {
                                    fill: '0',
                                },
                                '& .MuiMarkElement-highlighted': {
                                    stroke: 'none',
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
