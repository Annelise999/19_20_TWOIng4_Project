import React, { Component } from 'react';
import "./BarCform.css"

class BarCform extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Enquetes_resol:'',
            arg_gagne:''
    
    
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({Name: event.target.Name , Enquetes_resol:event.target.Enquetes_resol, arg_gagne:event.target.arg_gagne});
      }
    
      handleSubmit(event) {
        alert('Les informations ont bien été prises en compte' + this.state.value);
        event.preventDefault();
      }

    render() {
        return (
            <div className="formBarc">
                    
                    <h3>Formulaire pour BarC</h3>
                    
                    <form onSubmit={this.handleSubmit}>
                    <label>
                    Name:   
                    <input type="text" value={this.state.Name} onChange={this.handleChange} />
                    </label>
                    <label>
                    Enquetes resolues:   
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

export default BarCform;