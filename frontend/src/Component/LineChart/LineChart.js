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
   
     
     axios.get('http://localhost:3000/api/sensor/humidity', {
      params: {
        userId: "5ddb94c6fc13ae640c000015"
      }
    })
      .then(function (response) {
          data = [{
          'name': "Jan",
          'Humidity': response.data.Janvier
        },
        {
          'name': "Fev",
          'Humidity': response.data.Fevrier
        },
        {
          'name': "Mar",
          'Humidity': response.data.Mars
        },
        {
          'name': "Avr",
          'Humidity': response.data.Avril
        },
        {
          'name': "Mai",
          'Humidity': response.data.Mai
        },
        {
          'name': "Juin",
          'Humidity': response.data.Juin
        },
        {
          'name': "Juil",
          'Humidity': response.data.Juillet
        },
        {
          'name': "Juin",
          'Humidity': response.data.Juin
        },
        {
          'name': "Juil",
          'Humidity': response.data.Juillet
        },
        {
          'name': "Aou",
          'Humidity': response.data.Aout
        },
        {
          'name': "Sep",
          'Humidity': response.data.Septembre
        },
        {
          'name': "Oct",
          'Humidity': response.data.Octobre
        },
        {
          'name': "Nov",
          'Humidity': response.data.Novembre
        },
        {
          'name': "Dec",
          'Humidity': response.data.Decembre
        }
        ]

      }).then(function () {
        console.log(data);
        self.setState({ data: data });

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