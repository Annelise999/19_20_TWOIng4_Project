import React, { Component } from 'react';
import {
  ResponsiveContainer, ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import '../Widget.css';


class Charte extends Component {

    render() {
        const data = [
            {
              name: 'Mai', Enquêtes: 12, 
            },
            {
              name: 'Juin', Enquêtes: 13, 
            },
            {
              name: 'Juil', Enquêtes: 98, 
            },
            {
              name: 'Aou', Enquêtes: 39, 
            },
            {
              name: 'Sep', Enquêtes: 48, 
            },
            {
              name: 'Oct', Enquêtes: 38, 
            },
            {
              name: 'Nov', Enquêtes: 43, 
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
            <Bar dataKey="Enquêtes" barSize={20} fill="#413ea0" />           
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default Charte;