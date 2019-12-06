import React, { Component } from 'react';
import "../../App.css";
import { get } from 'https';

class Linecform extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Salaire:'',
            amt:''
    
    
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({Name: event.target.Name , Enquetes_resol:event.target.Salaire, arg_gagne:event.target.amt});
      }
    
      handleSubmit(event) {
        alert('Les informations ont bien été prises en compte pour ' + this.state.Name);
        event.preventDefault();

      }



    render() {
        return (
            <div className="Formulaire">
                 <h3>Formulaire pour LineC</h3>
                    
                    <form onSubmit={this.handleSubmit}>
                    <label>
                    Name:
                    <input type="text" value={this.state.Name} onChange={this.handleChange} />
                    </label>
                    <label>
                    Salaire:
                    <input type="number" value={this.state.Enquetes_resol} onChange={this.handleChange} />
                    </label>
                    <label>
                    Argent gagné:
                    <input type="number" value={this.state.arg_gagne} onChange={this.handleChange} />
                    </label>

                    <input type="submit" value="Submit" />
                    </form>
            </div>
        );
    }
}

export default Linecform;