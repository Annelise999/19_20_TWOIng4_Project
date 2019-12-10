import React, { Component } from 'react';
import '../Widget.css';
import axios from 'axios';

class Counter extends Component {
    

    state = {
        data : 9  
       }



    constructor(props){
        super(props);
        var self=this;
        var data = 0;

        

        axios.get('http://localhost:3000/api/user/sensors', {
            params: {
              userId:"5ddb94c6fc13ae640c000015"
            }
          } )
        .then(function (response) {
            console.log(response.data);
            data = response.data.nb_sensors;
            self.setState({data : data});
        })
        .catch(function (error) {
          console.log(error);
        })

       }
    




    render() {



    
        return (
            <div className= "widget ">
                <h4>Vous avez</h4> 
                <h2> {this.state.data} </h2>
                <h4>capteurs fonctionnels</h4> 
            </div>
        );
    }
}

export default Counter;