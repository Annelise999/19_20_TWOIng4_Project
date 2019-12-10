import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"

import { Container, Row, Col } from 'react-bootstrap';
import BarCform from "../Component/BarCform/BarCform";
import Camform from "../Component/Camform/Camform";
import Perso from "../Component/Perso/Perso";
import LineCform from "../Component/Linecform/Linecform";
import Galerieform from '../Component/Galerieform/Galerieform';
import Thermoform from '../Component/Thermoform/Thermoform';
import Adduserform from '../Component/Userform/Adduserform';
import Deleteuserform from '../Component/Userform/Deleteuserform';
import Changeuserform from '../Component/Userform/Changeuserform';



class Formulaire extends Component{
  render(){
    const ID = this.props.ID;

      
return (
<div class= "dashboard">
<Container className="Container">

 <Row>

 <Col sm=  "12" md="6" lg="4">

<Adduserform></Adduserform>

</Col>

<Col sm=  "12" md="6" lg="4">

<Deleteuserform></Deleteuserform>

</Col>

<Col sm=  "12" md="6" lg="4">

<Changeuserform></Changeuserform>

</Col>

 </Row>
  



<Row>

<Col sm=  "12" md="6" lg="4">

<Camform ID= {ID}> </Camform>

</Col>

<Col sm=  "12" md="6" lg="4">

<BarCform ID= {ID}> </BarCform>

</Col>

<Col sm=  "12" md="6" lg="4">

<LineCform ID= {ID}></LineCform>

</Col>




<Col  sm=  "12" md="6" lg="4">

<Thermoform ID= {ID}> </Thermoform>

</Col>
 

  
  
  
</Row>
</Container>
</div>

);
     
  }
  
}

 
export default Formulaire;
