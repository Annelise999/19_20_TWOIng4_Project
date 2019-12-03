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
import { Nav, NavBar } from 'react-bootstrap';

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
    <Col sm="10">
    <Perso> </Perso>
    </Col>

  <Col sm="2"> 
  <p></p>
  <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">Admin</Nav.Link>
      
  </Nav> 
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



