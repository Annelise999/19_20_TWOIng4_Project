import React, { Component } from 'react';
import '../Widget.css';

class Counter extends Component {
    
    render() {

    const data = 
        {
          number: 8
        }
      ;

    
        return (
            <div className= "widget">
                <h4>Vous avez:</h4> 
                <h2> 9 </h2>
                <h4>capteurs fonctionnels</h4> 
            </div>
        );
    }
}

export default Counter;