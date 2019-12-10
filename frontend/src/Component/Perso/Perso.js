import React, { Component } from 'react';
import './Perso.css';

import image1 from './image1.jpg';
//import { Row,Col, Nav, input } from 'react-bootstrap';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

 

class Perso extends Component{
 
  state = {
    userliste: []


}

constructor(props) {
  super(props);
  
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}

  handleChange(event) {
    this.setState({userliste: event.target.value});
  }

  handleSubmit(event) {
    alert('Les informations ont bien été prises en compte pour ' + this.state.userliste);
    event.preventDefault();
  }  
  
  
  
  
  render () {
      
      return (
       <div className="Profil" >
          <Row>
          
          <Col lg="2" className="d-none  d-lg-block">
          <img class="roundedImage" src= {image1} alt="photo de moi"/>
          </Col>
          
          <Col lg="5" md="8" sm="10">
          <h4> MOTHER OF DRAGONS</h4>
        </Col>
          
        <Col lg=""md="3" >
                  <p></p>         
                  <form onSubmit={this.handleSubmit}>

                  <Input type="select" name="select" id="exampleSelect" onChange={this.handleChange}>                  
                  {this.state.userliste.map((user) => (
                <option value={user._id}> {user._id} </option>
                ))}
         
                 </Input>
                  <input type="submit" value="connexion" style={{marginLeft:"1em"}}/> 
                  </form>

                  </Col>
                  
        </Row>
        
         
        
        
     
      </div>
      );
  }


}

export default Perso;


