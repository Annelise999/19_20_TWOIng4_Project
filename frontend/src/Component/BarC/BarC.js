import React, { Component } from 'react';
import './BarC.css';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

class BarC extends Component{
    render () {

        const data = [
            {
              name: 'Mai', Enquetes_resolues: 12, amt: 2400,
            },
            {
              name: 'Juin', Enquetes_resolues: 13, amt: 2210,
            },
            {
              name: 'Juil', Enquetes_resolues: 98, amt: 2290,
            },
            {
              name: 'Aou', Enquetes_resolues: 39, amt: 2000,
            },
            {
              name: 'Sep', Enquetes_resolues: 48, amt: 2181,
            },
            {
              name: 'Oct', Enquetes_resolues: 38, amt: 2500,
            },
            {
              name: 'Nov', Enquetes_resolues: 43, amt: 2100,
            },
          ];
          
          
      return (
        <div class= "chart" >
      <BarChart 
  className="barchart"
  width={500}
  height={300}
  data={data}
  margin={{
    top: 5, right: 30, left: 20, bottom: 5,
  }}
>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="Enquetes_resolues" fill="#8884d8" />
  
</BarChart>
        </div>
      );
  }


}

export default BarC;


