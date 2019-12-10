import React, { Component } from 'react';
import './Perso.css';

import image1 from './image1.jpg';
//import { Row,Col, Nav, input } from 'react-bootstrap';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
 

class Perso extends Component{
 
  state = {
    userliste: [],
    selecteduserliste: this.props.ID

}

constructor(props) {
  super(props);
  
this.handleChange = this.handleChange.bind(this);
var self=this;

axios.get('http://localhost:3000/api/user/all')
.then(function (response) {
    self.setState({userliste: response.data})
})
.catch(function (error) {
    console.log(error);
});
}







  handleChange(event) {
    this.setState({selecteduserliste: event.target.value});
    this.props.functioncallback(event.target.value)
  }
  
  render () {
      
      return (
       <div className="Profil" >
          <Row>
          
          <Col lg="5" className="d-none  d-lg-block">
          <img class="roundedImage" src= {image1} alt="photo de moi"/>
          </Col>
          
          <Col lg="3" md="6" className="d-none   d-lg-block">
          <h4> Herve's House</h4>
        </Col>
          
        <Col lg="4"md="12" sm="12" >
                  <p></p>         
                 

                  <Input type="select" name="select" id="exampleSelect" value={this.props.ID} onChange={this.handleChange}>                  
                  {this.state.userliste.map((user) => (
                <option value={user._id}> {user._id} </option>
                ))}
                 </Input>
               
                 

        </Col>
                  
        </Row>
        
         
        
        
     
      </div>
      );
  }


}

export default Perso;


