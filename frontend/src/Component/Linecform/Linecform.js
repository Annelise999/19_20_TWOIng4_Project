import React, { Component } from 'react';
import "../../App.css";
import { get } from 'https';
import axios from 'axios';

class Linecform extends Component {

   
    state = {
        Jour: '',
        Mois:'',
        Annee:'',
        Humidity:''


}
   
    constructor(props) {
        super(props);
        
    this.jourhandleChange = this.jourhandleChange.bind(this);
    this.moishandleChange = this.moishandleChange.bind(this);
    this.anneehandleChange = this.anneehandleChange.bind(this);
    this.valeurhandleChange = this.valeurhandleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    }


    jourhandleChange(event) {
    this.setState({Jour: event.target.value});
    }
    moishandleChange(event) {
    this.setState({Mois:event.target.value});
    }
    anneehandleChange(event) {
    this.setState({Annee:event.target.value});
    }
    valeurhandleChange(event) {
    this.setState({Humidity:event.target.value});
    }


    handleSubmit(event) {
 
        event.preventDefault();

        var requestBody = {
            valeur: this.state.Humidity,
            jour: this.state.Jour,
            mois: this.state.Mois,
            annee: this.state.Annee,
    
     }

     alert(this.state.Humidity)
     alert('Les informations ont bien été prises en compte pour ' + this.state.Mois);

     axios.post('http://localhost:3000/api/hum',requestBody)
     .then(res => {
     console.log(requestBody);
     console.log(res.data);
     }
   )
   
      }



    render() {
        return (
            <div className="Formulaire">
                 <h3>Ajout de l'Humidité</h3>
                    
                    <form onSubmit={this.handleSubmit}>
                    
     <tr> 
            <td>    <label>
                    Jour:
                    <input type="number"   onChange={this.jourhandleChange} style={{ width: "25%" }}/>
                    </label>
                    <label>
                    Mois:
                    <input type="text"   onChange={this.moishandleChange}style={{ width: "25%" }}/>
                    </label>
                    <label>
                    Année:
                    <input type="Number"   onChange={this.anneehandleChange}style={{ width: "30%" }}/>
                    </label>
              </td></tr>
    <tr> 
            <td>               
                    <label>
                    Humidité:   
                    <input type="number"  onChange={this.valeurhandleChange} style={{width:"70%"}}/>
                    </label>
            </td>
    </tr>
                    <input type="submit" value="Submit" />
                    </form>
            </div>
        );
    }
}

export default Linecform;