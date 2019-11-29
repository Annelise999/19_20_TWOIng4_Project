import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Dashboard from './Pages/Dashboard';
import Formulaire from './Pages/Formulaire';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';


class App extends Component{
  render(){

    
  return (
   
   <Router>
      <div>
        <Row>
          
          <Col sm="1" style={{padding:0}}>
            <div className="Menu" >
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/about">Formulaire</Link>
            </li>
          </ul>
        </nav>
        </div>
        </Col>
        <Col sm="11"style={{padding:0}}>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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



