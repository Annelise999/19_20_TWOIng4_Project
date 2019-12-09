import React, { Component } from 'react';
import "../../App.css";


class Camform extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            pourcentage:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value, pourcentage:event.target.pourcentage});
      }
    
      handleSubmit(event) {
        alert('Les informations ont bien été prises en compte pour ' + this.state.value);
        event.preventDefault();
      }



    render() {
        return (
            <div className="Formulaire">
                
                <h3>Composition de l'air</h3>
                
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Choisissez le composant:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="N2">Azote N2</option>
                        <option value="O2">Dioxygène O2</option>
                        <option value="Dioxyde de Carbone">CO2</option>
                        <option value="Autre Gaz">Autre Gaz</option>
                    </select>
                    </label>

                    <label>
                    Pourcentage:
                    <input type="number" value={this.state.pourcentage} onChange={this.handleChange} style={{width:"70%"}}/>
                    </label>


                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Camform;