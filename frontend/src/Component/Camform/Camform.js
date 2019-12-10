import React, { Component } from 'react';
import "../../App.css";
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';


class Camform extends Component {


    state = {
    Sensorliste:[],
    Airpollution:'',
    selectedsensorliste:''
}



    constructor(props) {
        super(props);
        var self=this;    
   
        this._idhandleChange = this._idhandleChange.bind(this);
        this.valeurhandleChange = this.valeurhandleChange.bind(this);
    
    this.handleSubmit = this.handleSubmit.bind(this);
    
    axios.get('http://localhost:3000/api/sensor', {
        params: {
          userId:"5ddb94c6fc13ae640c000016"
        }
      } 
      )
      .then(function (response) {
          self.setState({Sensorliste: response.data})
      })
      .catch(function (error) {
          console.log(error);
      });

}


    _idhandleChange(event) {
    this.setState({selectedsensorliste:event.target.value});
    }
    valeurhandleChange(event) {
    this.setState({Airpollution:event.target.value});
    }
    
      handleSubmit(event) {
      
        event.preventDefault();
        var requestBody = {
            value: this.state.Airpollution,
            type: "Air pollution",
            sensorId: this.state.Sensorliste
    
     }

     

     axios.post('http://localhost:3000/api/measure',requestBody)
     .then(res => {
     console.log(requestBody);
     console.log(res.data);
     }
   )
      }



    render() {
        return (
            <div className="Formulaire">
                
                <h3>Composition de l'air</h3>
                
                <form onSubmit={this.handleSubmit}>
        <tr> 
            <td>  
                    <label>
                    Sensor id :
                <Input type="select" name="select" id="exampleSelect" onChange={this._idhandleChange} style={{ width: "70%"}}>                  
                  
                  {this.state.Sensorliste.map((sensor) => (
                     <option value={sensor._id}> {sensor._id} </option>
                ))}
            </Input>
                    </label>
            </td>
            </tr>

            <tr> 
            <td>
                    <label>
                    Pourcentage d'air pollué:
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

export default Camform;