import React, { Component } from 'react';
import {
  ResponsiveContainer, ComposedChart, Area, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import '../Widget.css';



class LineChart extends Component {

    render() {
      const data = [
        {
          name: 'Mai', Salary: 1400, amt: 2400,
        },
        {
          name: 'Juin', Salary: 1500, amt: 2210,
        },
        {
          name: 'Juil', Salary: 4000, amt: 2290,
        },
        {
          name: 'Aou', Salary: 2780, amt: 2000,
        },
        {
          name: 'Sep', Salary: 1890, amt: 2181,
        },
        {
          name: 'Oct', Salary: 2390, amt: 2500,
        },
        {
          name: 'Nov', Salary: 3490, amt: 2100,
        },
      ];
      

    return (
      <div className= "widget" style={{ width: '100%', height: 300 }}>
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
         
         
          <Line type="monotone" dataKey="Salary" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
    );
  }
}

export default LineChart;