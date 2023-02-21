import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './App.css';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
    plugins: {
        legend: {
            display: false
        },
        tooltip: {
            enabled: false
        }
    }
}

export const data = {
    labels: ['Red', 'Blue'],
    datasets: [
        {
            label: '1',
            data: [15,1],
            backgroundColor: [
                'rgba(196, 196, 196, 1)',
                'rgba(231, 231, 231, 1)'
            ],
            borderColor: [
                'rgba(196, 196, 196, 1)',
                'rgba(231, 231, 231, 1)'
            ],
            borderWidth: 1,
            circumference:270,
            rotation:180,
            //offset:200,
            //spacing:100,
            cutout: '90%',
            radius: '85%'
        },
        {
            label: '2',
            data: [19,2],
            backgroundColor: [
                'rgba(255, 127, 0, 1)',
                'rgba(231, 231, 231, 1)'
            ],
            borderColor: [
                'rgba(255, 127, 0, 1)',
                'rgba(231, 231, 231, 1)'
            ],
            borderWidth: 1,
            circumference:270,
            rotation:180,
            cutout: '40%'
            //weight:5,
        }
    ],

};

function App() {



  return (
    <div className="App">
        <div className='wrapper' style={{width:'500px',height:'500px'}}>
            <Doughnut options={options} data={data} />
            <div className='main-progress'></div>
        </div>
    </div>
  );
}

export default App;
