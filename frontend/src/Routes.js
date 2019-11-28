import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard';
import Formulaire from './Pages/Formulaire';


 
export default function MainRouter () {
    return (
        <Router>
            <div>
                <Route path='/Dashboard' exact component={Dashboard}/>
                <Route path='/Formulaire' exact component={Formulaire}/>
            </div>
        </Router>
    )
}