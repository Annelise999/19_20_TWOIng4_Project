/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import './LineC.css';

const data = [
  {
    name: 'Mai', salary: 1400, amt: 2400,
  },
  {
    name: 'Juin', salary: 1500, amt: 2210,
  },
  {
    name: 'Juil', salary: 4000, amt: 2290,
  },
  {
    name: 'Aou', salary: 2780, amt: 2000,
  },
  {
    name: 'Sep', salary: 1890, amt: 2181,
  },
  {
    name: 'Oct', salary: 2390, amt: 2500,
  },
  {
    name: 'Nov', salary: 3490, amt: 2100,
  },
];

class CustomizedLabel extends Component {
  render() {
    const {
      x, y, stroke, value,
    } = this.props;

    return <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">{value}</text>;
  }
}

class CustomizedAxisTick extends Component {
  render() {
    const {
      x, y, stroke, payload,
    } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">{payload.value}</text>
      </g>
    );
  }
}

export default class LineC extends Component {
  
  render() {
    return (
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="salary" stroke="#3384d8" label={<CustomizedLabel />} />
    
      </LineChart>
    );
  }
}
