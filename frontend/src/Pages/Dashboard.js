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
  <Col sm="6">
    <Perso> </Perso>
    <p> Salut c'est moi je suis Anne-Lise</p>
  </Col>
  <Col sm="4">
    <Horloge></Horloge>
  </Col>
  <Col sm="1"> 
  <p> </p> 
   <Bouton></Bouton> 
    </Col>
</Row>



<Row>
  
<Col md = "6" sm=  "12" xs="12" >

<br></br>

<<<<<<< HEAD
<Row><Horloge></Horloge></Row>
=======


<br></br>
>>>>>>> 3272fcf671c022aa6003e8b96a5bb7841329b9b7
<Row><Galerie > </Galerie></Row>
<Row><Cam></Cam></Row>

</Col>



<Col md= "1" sm=  "1" xs= "1"></Col>

<Col md= "5" sm=  "12" xs= "12">

<Row><BarC></BarC></Row>
<Row><br></br></Row>
<Row><LineC></LineC></Row>




</Col>

</Row>

</Container>
</div>

);
     
  }
  
}

 
export default Dashboard;
