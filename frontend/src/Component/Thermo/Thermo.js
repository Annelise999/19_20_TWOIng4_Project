import React, { Component }  from 'react';
import Thermometer from 'react-thermometer';
import "./Thermo.css";
 
class Thermo extends Component {
    render() {

        return (
           
<div>
    <h2>TEMPERATURE</h2>
<Thermometer
        min={0}
        max={30}
        width={10}
        height={80}
        backgroundColor={'blue'}
        fillColor={'green'}
        current={10}
/>
</div>	
        );
    }
}

export default Thermo;