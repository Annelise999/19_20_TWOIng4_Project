import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"

import { Container, Row, Col } from 'react-bootstrap';
import BarCform from "../Component/BarCform/BarCform";
import Camform from "../Component/Camform/Camform";
import Perso from "../Component/Perso/Perso";
import LineCform from "../Component/Linecform/Linecform";
import Bouton from '../Component/Bouton/Bouton';
import Galerieform from '../Component/Galerieform/Galerieform';
import Thermoform from '../Component/Thermoform/Thermoform';



class Formulaire extends Component{
  render(){
      
return (
<div class= "dashboard">
<Container className="Container">

 
  



<Row>

<Col sm=  "12" md="6" lg="4">

<Camform > </Camform>

</Col>

<Col sm=  "12" md="6" lg="4">

<BarCform > </BarCform>

</Col>

<Col sm=  "12" md="6" lg="4">

<LineCform></LineCform>

</Col>


<Col  sm=  "12" md="6" >

<Galerieform></Galerieform>

</Col>

<Col  sm=  "12" md="6">

<Thermoform > </Thermoform>

</Col>
 
  
  
  
  
</Row>
</Container>
</div>

);
     
  }
  
}

 
export default Formulaire;
