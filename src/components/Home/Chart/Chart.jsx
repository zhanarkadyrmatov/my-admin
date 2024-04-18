import React from 'react'
import s from './Chart.module.scss'
import { BarChart } from '@mui/x-charts/BarChart';
export default function Chart() {
const luData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const lpData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const lxLabels = [ 
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
            <div className={s.Chart}>
                <div className={s.chart_grid}>
                    <div className={s.flex_text_button}>
                        <h3>Chart</h3>
                        <div className={s.flex_button}>
                            <button>Daily</button>
                            <button>Weekly</button>
                            <button className={s.btn7}>Monthly</button>
                        </div>
                    </div>
                    <div className={s.flex_button_context}>
                        <nav>
                            <li>
                                <button>Delivered</button>
                            </li>
                            <h5>
                                239
                                <p>+0.4%</p>
                            </h5>
                            <li>
                                <button className={s.grey}></button>Expense
                            </li>
                            <h5>$8,345</h5>
                        </nav>
                    </div>  
                    <div className={s.margin_barchart}>
                        <BarChart
                            width={650}
                            height={340}
                            series={[
                                { data: lpData, id: 'pvId' },
                                { data: luData, id: 'uvId' },
                            ]}
                            xAxis={[{ data: lxLabels, scaleType: 'band' }]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
