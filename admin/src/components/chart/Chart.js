import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Chart.scss'
const data = [
  {
    month:"January",
    amt:1000
  },
  {
    month:"February",
    amt:1600
  },
  {
    month:"March",
    amt:900
  },
 {
    month:"April",
    amt:1100
  },
  {
    month:"May",
    amt:750
  },
  {
    month:"June",
    amt:800
  }
];

export const Chart=({aspect,title})=>{
  
 
    return (
      <div>
        <div style={{color:'lightgray',fontWeight:'500'}}>{title}</div>
        <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
  </linearGradient>
  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
  </linearGradient>
</defs>
          <CartesianGrid strokeDasharray="3 3" className='cgrid' />
          <XAxis dataKey="month" />
          
          <Tooltip />
          <Area type="monotone" dataKey="amt" stroke="#8884d8" fill="url(#colorUv)" fillOpacity={1} />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    );
  
}
