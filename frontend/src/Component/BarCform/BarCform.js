import React, { Component } from 'react';
import "../../App.css";
import axios from 'axios';

class BarCform extends Component {
    
    
  state = {
    Jour: '',
    Mois: '',
    Annee: '',
    Temperature:''

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
        this.setState({Mois: event.target.value});
      }
      anneehandleChange(event) {
        this.setState({Annee: event.target.value});
      }
      valeurhandleChange(event) {
        this.setState({Temperature :event.target.value});
      }
      
    
    handleSubmit(event) {
      event.preventDefault();
        var requestBody = {
                valeur: this.state.Temperature,
                jour: this.state.Jour,
                mois: this.state.Mois,
                annee: this.state.Annee,
        
         }
         
         alert('Les informations ont bien été prises en compte');

        axios.post('http://localhost:3000/api/temp',requestBody)
        .then(res => {
        console.log(requestBody);
        console.log(res.data);
        }
      )
      

    }

    render() {
        return (
            <div className="Formulaire">
                    
                    <h3>Ajouter une température</h3>
                    
                    <form onSubmit={this.handleSubmit}>
                    
            <tr> 
                <td>
                    <label>
                    Jour:
                    <input type="Number" value={this.state.Jour}  onChange={this.jourhandleChange} style={{ width: "25%" }}/>
                    </label>
               
                    <label>
                    Mois:
                    <input type="text"   onChange={this.moishandleChange} style={{ width: "25%" }}/>
                    </label>
                
            
     
                    <label>
                    Année:
                    <input type="Number" value={this.state.Annee}  onChange={this.anneehandleChange} style={{ width: "30%" }}/>
                    </label>
                </td></tr>
             <tr>   
                <td> 
                    <label>
                    Température:   
                    <input type="Number" value={this.state.Temperature} onChange={this.valeurhandleChange} style={{ width: "70%" }}/>
                    </label>
                </td>
            </tr>   
                    
                    <input type="submit" value="Submit"  />
                    
                    </form>
            </div>
        );
    }
}

export default BarCform;