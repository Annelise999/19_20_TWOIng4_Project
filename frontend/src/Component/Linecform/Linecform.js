import React, { Component } from 'react';
import "../../App.css";
import { get } from 'https';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

class Linecform extends Component {

   
    state = {
       
        Sensorliste:[],
        Humidity:'',
        selectedsensorliste:''


}
   
    constructor(props) {
        super(props);
        const ID= props.ID

    var self=this;    
   
    this._idhandleChange = this._idhandleChange.bind(this);
    this.valeurhandleChange = this.valeurhandleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);


    axios.get('http://localhost:3000/api/sensor', {
        params: {
          userId: props.ID
        }
      } 
      )
      .then(function (response) {
          self.setState({Sensorliste: response.data})
          self.setState({selectedsensorliste:response.data[0]._id})
      })
      .catch(function (error) {
          console.log(error);
      });
  


    }


    
    _idhandleChange(event) {
        this.setState({selectedsensorliste:event.target.value});
        }
    valeurhandleChange(event) {
    this.setState({Humidity:event.target.value});
    }


    handleSubmit(event) {
 
        event.preventDefault();

        var requestBody = {
            value: this.state.Humidity,
            type: "humidity",
            sensorId: this.state.selectedsensorliste
    
     }

    

     axios.post('http://localhost:3000/api/measure',requestBody)
     .then(res => {
     console.log(requestBody);
     console.log(res.data);
     }
   )
   
      }


      componentDidUpdate(prevProps) {

        if (prevProps.ID !== this.props.ID) {
            var self = this;
        var data = 0;
        axios.get('http://localhost:3000/api/sensor', {
            params: {
              userId: this.props.ID
            }
          } 
          )
          .then(function (response) {
              self.setState({Sensorliste: response.data})
              self.setState({selectedsensorliste:response.data[0]._id})
          })
          .catch(function (error) {
              console.log(error);
          });
      
    
    
        

          }
        
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
                <Input type="select" name="select" id="exampleSelect" onChange={this._idhandleChange} style={{ width: "70%"}}>                  
                  
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