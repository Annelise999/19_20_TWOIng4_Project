import React, { Component } from 'react';
import {
  ResponsiveContainer, ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import '../Widget.css';
import axios from 'axios';


class Charte extends Component {

        state = {
         data : [
          
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
            }
         ]
        }

        constructor(props){
          super(props);
         
         var data = [];
         var self=this;
         var newdata;  
         
          axios.get('http://localhost:3000/api/temp')
         .then(function (response) {
             response.data.forEach(function(element) {
                 newdata = {
                     'name': element._id , 
                     'Température': element.moyenne 
                    
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
          render(){
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
            <Bar dataKey="Température" barSize={20} fill="#413ea0" />           
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default Charte;