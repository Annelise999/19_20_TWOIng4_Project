import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Dashboard from './Pages/Dashboard';
import Formulaire from './Pages/Formulaire';
import Perso from "./Component/Perso/Perso";
import Bouton from"./Component/Bouton/Bouton";
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
    <Col lg= "8" md= "7" xs="6">
    <Perso> </Perso>
    </Col>

  <Col lg="4" md="5" className="d-none d-sm-none d-md-block "> 
  <p></p>
  <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">Admin</Nav.Link>
      
  </Nav> 
    </Col>
    
    <Col xs="4" sm="4" md="2" className ="d-md-none d-sm-block ">
    <NavDropdown title="Menu" id="basic-nav-dropdown">
        <NavDropdown.Item href="/">Home</NavDropdown.Item>
        <NavDropdown.Item href="/about">Admin</NavDropdown.Item>
        
       
      </NavDropdown>
    </Col>
  </Row>  </div>


        <Switch>
          <Route path="/about">
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



