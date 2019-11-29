import React, { Component } from 'react';
import "../../App.css";

class Galerieform extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            value: '',
                
    
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    
      handleSubmit(event) {
        alert('Les informations ont bien été prises en compte' + this.state.value);
        event.preventDefault();
      }
   
   
   
   
    render() {
        return (
            <div className="Formulaire">
                 <h3>Nouvelle photo</h3>
                    
                    <form onSubmit={this.handleSubmit}>
                    <label>
                   
                    <input type="file" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    

                    <input type="submit" value="Submit" />
                    </form>
            </div>
        );
    }
}

export default Galerieform;