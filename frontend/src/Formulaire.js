import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

import { Container, Row, Col } from 'react-bootstrap';
import BarCform from "./Component/BarCform/BarCform";
import Camform from "./Component/Camform/Camform";
import Perso from "./Component/Perso/Perso";
import LineCform from "./Component/Linecform/Linecform";
import Bouton from './Component/Bouton/Bouton';
import Galerieform from './Component/Galerieform/Galerieform';
import Thermoform from './Component/Thermoform/Thermoform';



class Formulaire extends Component{
  render(){
      
return (
<div class= "dashboard">
  <Container>

 
  

<Row>
  <Col sm="10">
    <Perso> </Perso>
    <p> Salut c'est moi je suis Anne-Lise</p>
  </Col> 
  <Col sm="2"> 
  <p> </p> 
   <Bouton></Bouton> 
    </Col>
</Row>

<Row>

<Col sm= "4">

<Row><Camform > </Camform></Row>

</Col>

<Col sm=  "4">

<Row><BarCform > </BarCform></Row>

</Col>

<Col sm=  "4">

<Row><LineCform></LineCform></Row>

</Col>

</Row>

<Row>
<Col sm= "6">

<Row><Galerieform></Galerieform></Row>

</Col>

<Col sm=  "6">

<Row><Thermoform > </Thermoform></Row>

</Col>
 
  
  
  
  
</Row>
</Container>
</div>

);
     
  }
  
}

 
export default Formulaire;
