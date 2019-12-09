import React, { Component } from 'react';
import "../../App.css";
import { get } from 'https';

class Linecform extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Jour: '',
            Mois:'',
            Annee:'',
            Humidity:'',
    
    
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({Jour: event.target.Jour , Mois:event.target.Mois, Annee:event.target.Annee, Humidity:event.target.Humidity});
      }
    
      handleSubmit(event) {
        alert('Les informations ont bien été prises en compte pour ' + this.state.Mois);
        event.preventDefault();

      }



    render() {
        return (
            <div className="Formulaire">
                 <h3>Ajout de l'Humidité</h3>
                    
                    <form onSubmit={this.handleSubmit}>
                    <label>
                    Jour:
                    <input type="number" value={this.state.Jour}  onChange={this.handleChange} style={{ width: "25%" }}/>
                    </label>
                    <label>
                    Mois:
                    <input type="text" value={this.state.Mois}  onChange={this.handleChange}style={{ width: "25%" }}/>
                    </label>
                    <label>
                    Année:
                    <input type="Number" value={this.state.Annee}  onChange={this.handleChange}style={{ width: "30%" }}/>
                    </label>
                    
                    <label>
                    Humidité:   
                    <input type="number" value={this.state.Humidity} onChange={this.handleChange} style={{width:"70%"}}/>
                    </label>

                    <input type="submit" value="Submit" />
                    </form>
            </div>
        );
    }
}

export default Linecform;