import * as React from 'react';
import s from './HomePages.module.scss'
import Typography from '@mui/material/Typography';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Available from '../../components/Home/Available/Available';
import Network from '../../components/Home/Network/Network';
import Recent from '../../components/Home/Recent/Recent';
import Vacancy from '../../components/Home/Vacancy/Vacancy';
import Chart from '../../components/Home/Chart/Chart';
import Overflow from '../../components/Home/Overflow/Overflow';
import Static from '../../components/Home/Static/Static';
import Franklin from '../../components/Home/Franklin/Franklin';


const palette = ['red', 'blue', 'green'];
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


export default function Homepages() {

    return (
        <div className={s.container}>
            <div className={s.flexGrow}>
                <div className={s.div_react}>
                    <Static />
                    <Vacancy />
                    <Chart />
                    <Overflow />
                </div>
                <div className={s.display_grid}>
                    <Franklin />
                    <Recent />
                    <Available />
                    <Network />
                </div>
            </div>
        </div>
    )
}
