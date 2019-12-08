import React, { Component } from 'react';
import {
  ResponsiveContainer, ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import '../Widget.css';


class Charte extends Component {

    render() {
        const data = [
            {
              name: 'Mai', Température: 18, 
            },
            {
              name: 'Juin', Température: 19, 
            },
            {
              name: 'Juil', Température: 21, 
            },
            {
              name: 'Aou', Température: 22, 
            },
            {
              name: 'Sep', Température: 25, 
            },
            {
              name: 'Oct', Température: 30, 
            },
            {
              name: 'Nov', Température: 29, 
            },
            {
              name: 'Dec', Température: 29, 
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
            <Bar dataKey="Température" barSize={20} fill="#413ea0" />           
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default Charte;