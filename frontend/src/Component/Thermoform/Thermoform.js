import React, { Component } from 'react';
import "../../App.css";
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Thermoform extends Component {
  
  
    state = {
        
        userliste: [],
        
        
        location:'',
        userID:''

     
}


    constructor(props) {
        super(props);
        const ID= props.ID
        
    
//    this._idhandleChange = this._idhandleChange.bind(this);
    this.locationhandleChange = this.locationhandleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }


   
    locationhandleChange(event) {
        this.setState({location: event.target.value});
      }
  


      handleSubmit(event) {
    
        event.preventDefault();

        var requestBody = {
          location: this.state.location,
          userId: this.props.ID
     
          }
          
          alert('Les informations ont bien été prises en compte');

          axios.post('http://localhost:3000/api/sensor',requestBody)
          .then(res => {
          console.log(requestBody);
          console.log(res.data);
          }
)


      }




    render() {
        return (
            <div className="Formulaire">
                <h3>Ajouter un capteur</h3>
                    
                    <form onSubmit={this.handleSubmit}>
 

           <tr> 
            <td>         
                   
                    <label>
                    Location
                    <input type="Text"   onChange={this.locationhandleChange} style={{ width: "50%", marginLeft:"1em"}}/>
                    </label>
                  

              
               </td>
               </tr>     
                    <input type="submit" value="Ajouter" />
                    </form>
            </div>
        );
    }
}

export default Thermoform;