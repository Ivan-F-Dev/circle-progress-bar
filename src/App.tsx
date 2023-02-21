import React, {useState} from 'react';
import s from './App.module.scss';
import Chart from "./components/Chart/Chart";

// ChartJS.register(ArcElement, Tooltip, Legend);
//
// export const options = {
//     plugins: {
//         legend: {
//             display: false
//         },
//         tooltip: {
//             enabled: false
//         }
//     }
// }
//
// export const data = {
//     labels: ['Red', 'Blue'],
//     datasets: [
//         {
//             label: '1',
//             data: [15,1],
//             backgroundColor: [
//                 'rgba(196, 196, 196, 1)',
//                 'rgba(231, 231, 231, 1)'
//             ],
//             borderColor: [
//                 'rgba(196, 196, 196, 1)',
//                 'rgba(231, 231, 231, 1)'
//             ],
//             borderWidth: 1,
//             circumference:270,
//             rotation:180,
//             //offset:200,
//             //spacing:100,
//             cutout: '90%',
//             radius: '85%'
//         },
//         {
//             label: '2',
//             data: [19,2],
//             backgroundColor: [
//                 'rgba(255, 127, 0, 1)',
//                 'rgba(231, 231, 231, 1)'
//             ],
//             borderColor: [
//                 'rgba(255, 127, 0, 1)',
//                 'rgba(231, 231, 231, 1)'
//             ],
//             borderWidth: 1,
//             circumference:270,
//             rotation:180,
//             cutout: '40%'
//             //weight:5,
//         }
//     ],
//
// };

function App() {

    const [chartSize,setChartSize] = useState<number>(500)
    const [data,setData] = useState({
        mainValue: 234840,
        mainTotal: 246051,
        altValue: 272289,
        altTotal: 283500
    })

    const [mainValue,setMainValue] = useState<number>(0)
    const [mainTotal,setMainTotal] = useState<number>(0)
    const [altValue,setAltValue] = useState<number>(0)
    const [altTotal,setAltTotal] = useState<number>(0)

  return (
    <div className={s.App}>
        {/*панель просто для удобства тестирования*/}
        <div className={s.panel}>
            <input value={mainValue} onChange={(e)=>setMainValue(Math.abs(Number(e.target.value)))} type="number" title='прогрес оранжевый'/>
            <input value={mainTotal} onChange={(e)=>setMainTotal(Math.abs(Number(e.target.value)))} type="number" title='максимум оранжевый'/>
            <input value={altValue} onChange={(e)=>setAltValue(Math.abs(Number(e.target.value)))} type="number" title='прогрес серый'/>
            <input value={altTotal} onChange={(e)=>setAltTotal(Math.abs(Number(e.target.value)))} type="number" title='максимум серый'/>
            <input value={chartSize} onChange={(e)=>setChartSize(Math.abs(Number(e.target.value)))} type="number"/>
            <button onClick={() => setData({mainValue,mainTotal,altValue,altTotal})} title='Размер компонента'>Set Data</button>
        </div>

        <Chart data={data} chartSize={chartSize}/>
    </div>
  );
}

export default App;
