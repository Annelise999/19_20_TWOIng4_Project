import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Dashboard from './Pages/Dashboard';
import Formulaire from './Pages/Formulaire';
import Perso from "./Component/Perso/Perso";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Nav, NavDropdown } from 'react-bootstrap';

class App extends Component{
  render(){

    
  return (
   
   <Router>
      <div>
        <Row>
          
          
        <Col sm="12"style={{padding:0}}>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        
        
  <div className= "Hautdepage">
   <Row> 
   
  <Col lg="5" md="4"  className="d-none d-sm-none d-md-block "> 
  <p></p>
  <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/admin">Admin</Nav.Link>
      
  </Nav> 
  </Col> 

  <Col sm="2" xs="3"className ="d-md-none d-sm-block ">
  <p></p>
    <NavDropdown title="Menu" id="basic-nav-dropdown">
        <NavDropdown.Item href="/">Home</NavDropdown.Item>
        <NavDropdown.Item href="/admin">Admin</NavDropdown.Item>
    </NavDropdown>
    </Col>
  
  
    
    <Col lg= "7" md= "8"  sm ="10" xs="9">
    <Perso> </Perso>
    </Col>

  </Row> 
    
     </div>


        <Switch>
          <Route path="/admin">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Col>
      
      </Row>
      </div>
    </Router>
    
    
  );
}

}

 
export default App;


function Home() {
  return <Dashboard></Dashboard>;
}

function About() {
  return <Formulaire></Formulaire>;
}



