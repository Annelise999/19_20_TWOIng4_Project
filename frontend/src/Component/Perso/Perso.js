import React, { Component } from 'react';
import './Perso.css';
import image1 from './image1.jpg';
import { Row,Col, Nav } from 'react-bootstrap';


 

class Perso extends Component{
 
  state = {
    value: ''


}

constructor(props) {
  super(props);
  
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Les informations ont bien été prises en compte pour ' + this.state.value);
    event.preventDefault();
  }  
  
  
  
  
  render () {
      
      return (
       <div className="Profil" >
          <Row>
          
          <Col lg="2" className="d-none  d-lg-block">
          <img class="roundedImage" src= {image1} alt="photo de moi"/>
          </Col>
          
          <Col lg="6" md="8" sm="10">
          <h4> MOTHER OF DRAGONS</h4>
        </Col>
          
        <Col lg="4"md="3" >
                  <p></p>         
                  <form onSubmit={this.handleSubmit}>

                  <select value={this.state.value} onChange={this.handleChange}>
                                <option value="N2">Azote N2</option>
                                <option value="O2">Dioxygène O2</option>
                                <option value="Dioxyde de Carbone">CO2</option>
                                <option value="Autre Gaz">Autre Gaz</option>
                  </select>
                  <input type="submit" value="connexion" style={{marginLeft:"1em"}}/> 
                  </form>

                  </Col>
                  
        </Row>
        
         
        
        
     
      </div>
      );
  }


}

export default Perso;


