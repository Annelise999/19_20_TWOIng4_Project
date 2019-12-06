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
          
          <Col lg="7" md="8">
          <h3> MOTHER OF DRAGONS</h3>
      </Col>
          
          <Col lg="3" md="4" className="d-none d-xs-none d-md-block- d-lg-block">
            <Nav className="Nav">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">Admin</Nav.Link>
      
        </Nav> 
        </Col>
          
        </Row>
        
         
        
        
     
      </div>
      );
  }


}

export default Perso;


