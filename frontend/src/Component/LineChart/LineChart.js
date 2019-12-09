import React, { Component } from 'react';
import {
  ResponsiveContainer, ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import '../Widget.css';
import axios from 'axios';



class LineChart extends Component {

  


      state = {
        data : [
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
      ]
    }

    constructor(props){
      super(props);
     
     var data = [];
     var self=this;
     var newdata;  
     
      axios.get('http://localhost:3000/api/hum')
     .then(function (response) {
         response.data.forEach(function(element) {
             newdata = {
                 'name': element._id , 
                 'Humidity': element.moyenne 
                
             }
         data.push(newdata);
     });
     
     }).then (function(){
          console.log(data);
          self.setState({data : data});

     })
     .catch(function (error) {
       console.log(error);
     })

    }  




      render() {

    return (
      <div className= "widget droite" style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <ComposedChart
          width={500}
          height={400}
          data={this.state.data}
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