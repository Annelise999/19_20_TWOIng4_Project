import React, { Component } from 'react';
import "../../App.css";
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

class BarCform extends Component {


  state = {
    Sensorliste: [],
    Temperature: '',
    selectedsensorliste: ''

  }

  constructor(props) {
    super(props);

    var self = this;


    this._idhandleChange = this._idhandleChange.bind(this);
    this.valeurhandleChange = this.valeurhandleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


    axios.get('http://localhost:3000/api/sensor', {
      params: {
        userId: "5ddb94c6fc13ae640c000015"
      }
    }
    )
      .then(function (response) {
        console.log(response)
        self.setState({ Sensorliste: response.data })
      })
      .catch(function (error) {
        console.log(error);
      });


  }




  _idhandleChange(event) {
    this.setState({ selectedsensorliste: event.target.value });
  }


  valeurhandleChange(event) {
    this.setState({ Temperature: event.target.value });
  }


  handleSubmit(event) {
    event.preventDefault();
    var requestBody = {
      value: this.state.Temperature,
      type: "temperature",
      sensorId: this.state.selectedsensorliste

    }

    alert('Les informations ont bien été prises en compte');

    axios.post('http://localhost:3000/api/measure', requestBody)
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
                <Input type="select" name="select" id="exampleSelect" onChange={this._idhandleChange} style={{ width: "70%" }}>
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
                    <input type="Number" onChange={this.valeurhandleChange} style={{ width: "70%" }} />
              </label>


            </td>
          </tr>

          <input type="submit" value="Submit" />

        </form>
      </div>
    );
  }
}

export default BarCform;