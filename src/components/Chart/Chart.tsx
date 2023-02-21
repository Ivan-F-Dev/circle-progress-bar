import React, {FC, memo} from 'react'
import s from './Chart.module.scss'
import {Doughnut} from "react-chartjs-2";
import {ArcElement, Chart as ChartJS, Legend, Tooltip} from "chart.js";
import {prettify} from "../../utils/prettifyNum";


interface Props {
    data: {
        mainValue: number
        mainTotal: number
        altValue: number
        altTotal: number
    }
    chartSize?: number
};

const Chart: FC<Props> = React.memo(({data,chartSize=500}) => {

    if (data.altTotal <= 0) {
        data.altTotal =100
    }
    if (data.mainTotal <= 0) {
        data.mainTotal =100
    }

    const mainPercent = data.mainValue/data.mainTotal*100
    const altPercent = data.altValue/data.altTotal*100

    ChartJS.register(ArcElement, Tooltip, Legend);
    const options_ = {
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            }
        }
    }
    const data_ = {
        datasets: [
            {
                //label: '1',
                data: [data.altValue, data.altTotal-data.altValue],
                backgroundColor: [
                    'rgba(196, 196, 196, 1)',
                    'rgba(231, 231, 231, 1)'
                ],
                borderColor: [
                    'rgba(196, 196, 196, 1)',
                    'rgba(231, 231, 231, 1)'
                ],
                borderWidth: 0,
                circumference: 270,
                rotation: 180,
                cutout: '90%',
                radius: '85%'
            },
            {
                data: [data.mainValue, data.mainTotal-data.mainValue],
                backgroundColor: [
                    'rgba(255, 127, 0, 1)',
                    'rgba(231, 231, 231, 1)'
                ],
                borderColor: [
                    'rgb(255,127,0)',
                    'rgba(231, 231, 231, 1)'
                ],
                borderWidth: 0,
                circumference: 270,
                rotation: 180,
                cutout: '40%'
            }
        ],
    };

    const style = {
        height:chartSize+'px',
        width:chartSize*1.4+'px',
        fontSize:chartSize/10+'px'
    }

    return (
        <div style={style} className={s.Chart}>
            <Doughnut options={options_} data={data_}/>
            <div className={s.mainProgress}>{Math.round(mainPercent)}<span>%</span></div>
            <div className={s.subProgress}>{Math.round(altPercent)}%</div>
            <div className={s.info}>
                <div>
                    <div className={s.infoTitle}>НИТ</div>
                    <div className={s.infoRelation}>{prettify(data.mainValue)}<span> / {prettify(data.mainTotal)}</span></div>
                </div>
                <div>
                    <div className={s.infoTitle}>ПРОГНОЗ</div>
                    <div className={s.infoRelation}>{prettify(data.altValue)}<span> / {prettify(data.altTotal)}</span></div>
                </div>
            </div>
        </div>
    )
})

export default Chart