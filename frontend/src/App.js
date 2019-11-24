import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import './App.css';
//import Gallery from "./Component/Gallery/Gallery";
import Galerie from "./Component/Galerie/Galerie";
import BarC from "./Component/BarC/BarC";
import Cam from "./Component/Cam/Cam";
import Perso from "./Component/Perso/Perso";



class App extends Component{
  render(){

      
return (
<div class= "dashboard">
  <Container>
<Row>
  <Col sm="1"></Col>
  <Col sm="10">
    <Perso> </Perso>
 
    <p> Salut c'est moi je suis Anne-Lise</p>
  </Col> 
  <Col sm="1"></Col>
</Row>

<Row>
<Col sm="6"><Galerie > </Galerie></Col>
<Col sm="6"><BarC></BarC></Col>
</Row>

<Row>
<Col sm="6"><BarC></BarC></Col>
<Col sm="6"><Cam></Cam></Col>
</Row>


<Row>
<Col sm="6"><BarC></BarC></Col>
<Col sm="6"><Cam></Cam></Col>
</Row>

</Container>
</div>

);
     
  }
  
}

 
export default App;
