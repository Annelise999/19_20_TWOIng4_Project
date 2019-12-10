import React, { Component }  from 'react';
import "./Thermo.css";
import '../Widget.css';
import axios from 'axios';

 
class Thermo extends Component {
    
    state = {
        temperature : 0,
        humidity : 0,
        airPollution : 0,

    }



    constructor(props){
        super(props);
        var self=this;
        var data = [];


        axios.get('http://localhost:3000/api/sensor/max', {
            params: {
              userId:"5ddb94c6fc13ae640c000016"
            }
          } )
        .then(function (response) {

            self.setState({temperature : response.data[1].value, humidity :response.data[0].value, airPollution: response.data[2].value});
        })
        .catch(function (error) {
          console.log(error);
        })

       }
    



    
    
    render() {

        return (
           



    <div className= "widget tableau droite">
        <table>

     <tr>
       <th>Sensor</th>
       <th>Max Value</th>
   </tr>         
   <tr>
       <td>Température</td>
       <td>{this.state.temperature} °C</td>
   </tr>
   <tr>
       <td>Humidity</td>
       <td>{this.state.humidity} %</td>
   </tr>
     <tr>
       <td>airPollution</td>
       <td>{this.state.airPollution} %</td>
   </tr>
</table>
        
    </div>


        );
    }
}

export default Thermo;