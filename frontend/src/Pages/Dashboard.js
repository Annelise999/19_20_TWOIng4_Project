import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


import { Container, Row, Col } from 'react-bootstrap';
import Galerie from "../Component/Galerie/Galerie";
import BarC from "../Component/BarC/BarC";
import Cam from "../Component/Cam/Cam";
import Perso from "../Component/Perso/Perso";
import LineC from "../Component/LineC/LineC";
import Horloge from "../Component/Horloge/Horloge";
import Bouton from '../Component/Bouton/Bouton';



class Dashboard extends Component{
  render(){
      
return (
<div class= "dashboard">
  <Container className="Container">

 
  
    

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
  
<Col sm=  "6">

<br></br>

<Row>
<Col sm= "1"></Col>
<Horloge></Horloge>
<Col sm= "2"></Col>
<Col sm= "2"></Col>

</Row>

<br></br>
<Row><Galerie > </Galerie></Row>

</Col>



<Col sm=  "1"></Col>

<Col sm=  "5">

<Row><BarC></BarC></Row>
<Row><br></br></Row>
<Row><LineC></LineC></Row>
<Row><Cam></Cam></Row>



</Col>

</Row>

</Container>
</div>

);
     
  }
  
}

 
export default Dashboard;
