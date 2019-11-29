import React, { Component } from 'react';
import "../../App.css";

class Thermoform extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            value: '',
         
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({Name: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Les informations ont bien été prises en compte pour la temperature');
        event.preventDefault();
      }




    render() {
        return (
            <div className="Formulaire">
                <h3>Formulaire Thermomètre</h3>
                    
                    <form onSubmit={this.handleSubmit}>
                    <label>
                    Temperature :
                    <input type="number" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    
                    <input type="submit" value="Submit" />
                    </form>
            </div>
        );
    }
}

export default Thermoform;