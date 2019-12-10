import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


import { Container, Row, Col } from 'react-bootstrap';
import Galerie from "../Component/Galerie/Galerie";
import BarC from "../Component/BarC/BarC";
import Cam from "../Component/Cam/Cam";
import Perso from "../Component/Perso/Perso";
import Horloge from "../Component/Horloge/Horloge";
import LineChart from '../Component/LineChart/LineChart';
import Counter from '../Component/Counter/Counter';
import Thermo from '../Component/Thermo/Thermo';
import Infos from '../Component/Infos/Infos';


class Dashboard extends Component{


  render(){
    const ID = this.props.ID;
    console.log(ID)
return (
<div class= "dashboard">
  <Container className="Container">

 
<Row>
  
<Col md = "6" sm=  "12" xs="12" >

<br></br>

<Row><Horloge></Horloge> <Counter ID= {ID}></Counter></Row>
<Row> <Infos ID= {ID}> </Infos> <Thermo ID= {ID}></Thermo> </Row>
<Row><Galerie></Galerie> </Row>


</Col>



<Col md= "1" sm=  "1" xs= "1"></Col>

<Col md= "5" sm=  "12" xs= "12">

<Row><BarC ID= {ID}></BarC></Row>
<Row><LineChart ID= {ID}></LineChart></Row>
<Row> <Col lg="12"> <Cam ID= {ID}></Cam> </Col>  </Row>

  
  
  

</Col>

</Row>

</Container>
</div>

);
     
  }
  
}

 
export default Dashboard;
