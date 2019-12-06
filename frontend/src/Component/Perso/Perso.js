import React, { Component } from 'react';
import './Perso.css';
import image1 from './image1.jpg';
import { Container, Row, Col } from 'react-bootstrap';


 

class Perso extends Component{
     
          render () {
      
      return (
        <div className="Profil" >
         <Col lg= "2" md= "2" sm="12">  <img class="roundedImage" src= {image1} alt="photo de moi"/></Col>  
         <Col lg= "10" md= "10" sm="12"> <h2> MOTHER OF DRAGONS</h2></Col>
      
     
      </div>
      );
  }


}

export default Perso;


