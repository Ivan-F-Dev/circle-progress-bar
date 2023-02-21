import React, {useState} from 'react';
import s from './App.module.scss';
import Chart from "./components/Chart/Chart";

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
