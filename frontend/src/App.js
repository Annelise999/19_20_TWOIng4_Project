import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import './App.css';
//import Gallery from "./Component/Gallery/Gallery";
import Galerie from "./Component/Galerie/Galerie";
import BarC from "./Component/BarC/BarC";
import Cam from "./Component/Cam/Cam";
import Perso from "./Component/Perso/Perso";
import LineC from "./Component/LineC/LineC";



class App extends Component{
  render(){

      
return (
<div class= "dashboard">
  <Container>

   <Row>
    <Col sm=  "6">

<Row>

  <Col sm="10">
    <Perso> </Perso>
    <p> Salut c'est moi je suis Anne-Lise</p>
  </Col> 
  <Col sm="2"> 
  <p> </p> 
   <button> Admin </button>
    </Col>
</Row>

<Row><Galerie > </Galerie></Row>

<Row> <BarC></BarC> </Row>
<Row> <BarC></BarC> </Row>

</Col>

<Col sm=  "6">


<Row><BarC></BarC></Row>
<Row><LineC></LineC></Row>
<Row><Cam></Cam></Row>
<Row><BarC></BarC></Row>


</Col>

</Row>

</Container>
</div>

);
     
  }
  
}

 
export default App;
