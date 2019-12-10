import React, { Component } from 'react';
import "../../App.css";
import { get } from 'https';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

class Linecform extends Component {

   
    state = {
       
        Sensorliste:[],
        Jour: '',
        Mois:'',
        Annee:'',
        Humidity:''


}
   
    constructor(props) {
        super(props);
        
   
    this._idhandleChange = this._idhandleChange.bind(this);
    this.valeurhandleChange = this.valeurhandleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    }


    
    _idhandleChange(event) {
    this.setState({Sensorliste:event.target.value});
    }
    valeurhandleChange(event) {
    this.setState({Humidity:event.target.value});
    }


    handleSubmit(event) {
 
        event.preventDefault();

        var requestBody = {
            valeur: this.state.Humidity,
            jour: this.state.Jour,
            mois: this.state.Mois,
            annee: this.state.Annee,
    
     }

     alert(this.state.Humidity)
     alert('Les informations ont bien été prises en compte pour ' + this.state.Mois);

     axios.post('http://localhost:3000/api/hum',requestBody)
     .then(res => {
     console.log(requestBody);
     console.log(res.data);
     }
   )
   
      }



    render() {
        return (
            <div className="Formulaire">
                 <h3>Ajout de l'Humidité</h3>
                    
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
                    Humidité:   
                    <input type="number"  onChange={this.valeurhandleChange} style={{width:"70%"}}/>
                    </label>
            </td>
    </tr>
                    <input type="submit" value="Submit" />
                    </form>
            </div>
        );
    }
}

export default Linecform;