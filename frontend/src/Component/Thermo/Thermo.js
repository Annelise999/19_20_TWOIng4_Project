import React, { Component }  from 'react';
import "./Thermo.css";
import '../Widget.css';

 
class Thermo extends Component {
    render() {

        return (
           



    <div className= "widget tableau droite">
        <table>

     <tr>
       <th>Sensor</th>
       <th>Value</th>
   </tr>         
   <tr>
       <td>Temperature</td>
       <td>8°C</td>
   </tr>
   <tr>
       <td>Humidity</td>
       <td>30%</td>
   </tr>
     <tr>
       <td>Air pollution</td>
       <td>10%</td>
   </tr>
</table>
        
    </div>


        );
    }
}

export default Thermo;