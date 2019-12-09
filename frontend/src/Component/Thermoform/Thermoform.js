import React, { Component } from 'react';
import "../../App.css";

class Thermoform extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            valeur:'',

         
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({name: event.target.name, valeur: event.target.valeur});
      }
    
      handleSubmit(event) {
        alert('Les informations ont bien été prises en compte pour la temperature' + this.state.name);
        event.preventDefault();
      }




    render() {
        return (
            <div className="Formulaire">
                <h3>Ajouter un capteur</h3>
                    
                    <form onSubmit={this.handleSubmit}>
        <tr> 
            <td>
                    <label>
                    Nom du capteur :
                    <input type="text" value={this.state.name} onChange={this.handleChange} style={{width:"70%"}} />
                    </label>
           </td>
           </tr>

           <tr> 
            <td>         
                    <label>
                    Valeur :
                    <input type="Number" value={this.state.valeur} onChange={this.handleChange} style={{width:"70%"}} />
                    </label>
               </td>
               </tr>     
                    <input type="submit" value="Submit" />
                    </form>
            </div>
        );
    }
}

export default Thermoform;