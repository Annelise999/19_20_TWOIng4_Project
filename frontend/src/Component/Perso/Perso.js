import React, { Component } from 'react';
import './Perso.css';
import image1 from './image1.jpg';
import { Row,Col, Nav } from 'react-bootstrap';


 

class Perso extends Component{
     
          render () {
      
      return (
       <div className="Profil" >
          <Row>
          <Col lg="2" className="d-none d-lg-block">
          <img class="roundedImage" src= {image1} alt="photo de moi"/>
          </Col>
          
          <Col lg="10" md="12">
          <h3> MOTHER OF DRAGONS</h3>
      </Col>
          

          
        </Row>
        
         
        
        
     
      </div>
      );
  }


}

export default Perso;


