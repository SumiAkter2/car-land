import React from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import './ProgressChart.css'  


const ProgressChart = () => {
    const data = [
       
        {
          name: 'Cars availableB',
          uv:1000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Customer satisfaction',
          uv: 2500,
          pv: 9800,
          amt: 3290,
        },
        {
          name: 'Customers',
          uv: 3000,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Delivery',
          uv: 2200,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Sales',
          uv: 3500,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Repair',
          uv: 3000,
          pv: 4300,
          amt: 2100,
        },
      ];
    return (
        <div>
             {/* <ResponsiveContainer width="100%" height="100%"> */}
             <BarChart className='container sm-w-50'
    width={500}
    height={400}
    layout="vertical"
    data={data}
    margin={{top: 5, right: 0, left: 0, bottom: 5}}
>
    <XAxis />
    <YAxis type="category" dataKey="name" />
          <Bar dataKey="uv" fill="gray" />
        </BarChart>
      {/* </ResponsiveContainer> */}
        </div>
    );
};

export default ProgressChart;