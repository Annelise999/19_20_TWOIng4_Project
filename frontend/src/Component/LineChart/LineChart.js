import React, { Component } from 'react';
import {
  ResponsiveContainer, ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import '../Widget.css';



class LineChart extends Component {

    render() {
      const data = [
        {
          name: 'Mai', Humidity: 1400, 
        },
        {
          name: 'Juin', Humidity: 1500, 
        },
        {
          name: 'Juil', Humidity: 4000, 
        },
        {
          name: 'Aou', Humidity: 2780, 
        },
        {
          name: 'Sep', Humidity: 1890, 
        },
        {
          name: 'Oct', Humidity: 2390, 
        },
        {
          name: 'Nov', Humidity: 3490, 
        },
      ];
      

    return (
      <div className= "widget droite" style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
         
         
          <Line type="monotone" dataKey="Humidity" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
    );
  }
}

export default LineChart;