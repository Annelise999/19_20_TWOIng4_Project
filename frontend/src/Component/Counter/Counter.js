import React, { Component } from 'react';
import '../Widget.css';

class Counter extends Component {
    
    render() {



    
        return (
            <div className= "widget droite">
                <h4>Vous avez</h4> 
                <h2> 9 </h2>
                <h4>capteurs fonctionnels</h4> 
            </div>
        );
    }
}

export default Counter;