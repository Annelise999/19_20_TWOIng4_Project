import React, { Component } from 'react';
import "../../App.css";
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

class BarCform extends Component {
    
    
  state = {
    Sensorliste:[],
    Temperature:''

}
  
  constructor(props) {
        super(props);
        
    
    
  
    this._idhandleChange = this._idhandleChange.bind(this);
    this.valeurhandleChange = this.valeurhandleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

   
   
 
      _idhandleChange(event) {
        this.setState({Sensorlist: event.target.value});
      }
      valeurhandleChange(event) {
        this.setState({Temperature :event.target.value});
      }
      
    
    handleSubmit(event) {
      event.preventDefault();
        var requestBody = {
                valeur: this.state.Temperature,
                jour: this.state.Jour,
                mois: this.state.Mois,
                annee: this.state.Annee,
        
         }
         
         alert('Les informations ont bien été prises en compte');

        axios.post('http://localhost:3000/api/temp',requestBody)
        .then(res => {
        console.log(requestBody);
        console.log(res.data);
        }
      )
      

    }

    render() {
        return (
            <div className="Formulaire">
                    
                    <h3>Ajouter une température</h3>
                    
                    <form onSubmit={this.handleSubmit}>
                    
            <tr> 
                <td>
                  <label>
                Sensor id :
                <Input type="select" name="select" id="exampleSelect" onChange={this._idhandleChange} style={{ width: "200%"}}>                  
                  {this.state.Sensorliste.map((sensor) => (
                     <option value={sensor._id}> {sensor._id} </option>
                ))}
            </Input>
            </label>

                </td></tr>
             <tr>   
                <td> 
                    <label>
                    Température:   
                    <input type="Number" value={this.state.Temperature} onChange={this.valeurhandleChange} style={{ width: "70%" }}/>
                    </label>
                </td>
            </tr>   
                    
                    <input type="submit" value="Submit"  />
                    
                    </form>
            </div>
        );
    }
}

export default BarCform;