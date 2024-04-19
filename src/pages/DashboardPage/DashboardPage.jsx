import * as React from 'react';
import Available from '../../components/Home/Available/Available';
import Network from '../../components/Home/Network/Network';
import Recent from '../../components/Home/Recent/Recent';
import Vacancy from '../../components/Home/Vacancy/Vacancy';
import Chart from '../../components/Home/Chart/Chart';
import Overflow from '../../components/Home/Overflow/Overflow';
import Static from '../../components/Home/Static/Static';
import s from './DashboardPage.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Franklin from '../../components/Home/Franklin/Franklin';






export default function DashboardPage() {

    return (
        <div className={s.container}>
            <div className={s.flexGrow}>
                <div className={s.div_react}>
                    <Static />
                    <ChartTypeArea />
                    <ChartTypeBar />
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
