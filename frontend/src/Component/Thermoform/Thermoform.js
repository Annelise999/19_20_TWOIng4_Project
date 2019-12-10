import React, { Component } from 'react';
import "../../App.css";
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Thermoform extends Component {
  
  
    state = {
        
        userliste: [],
        _id:'',
        creationDate:'',
        location:'',
        userID:''

     
}


    constructor(props) {
        super(props);
        
    
    this._idhandleChange = this._idhandleChange.bind(this);
    this.locationhandleChange = this.locationhandleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({userID: event.target.value});
      }
    datehandleChange(event) {
        this.setState({creationDate: event.target.value});
      }
    locationhandleChange(event) {
        this.setState({location: event.target.value});
      }
    _idhandleChange(event) {
        this.setState({_id: event.target.value});
      }


      handleSubmit(event) {
        alert('Les informations ont bien été prises en compte pour la temperature' + this.state.name);
        event.preventDefault();
      }




    render() {
        return (
            <div className="Formulaire">
                <h3>Ajouter un capteur</h3>
                    
                    <form onSubmit={this.handleSubmit}>
        <tr> 
            <td>
                    <label>
                    User:
                    <Input type="select" name="select" id="exampleSelect" onChange={this._idhandleChange} style={{ width: "200%"}}>                  
                  {this.state.userliste.map((user) => (
                     <option value={user._id}> {user._id} </option>
                ))}
         
                 </Input>
                 </label>
           </td>
           </tr>

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