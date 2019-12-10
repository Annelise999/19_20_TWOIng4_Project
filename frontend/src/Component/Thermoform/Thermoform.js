import React, { Component } from 'react';
import "../../App.css";

class Thermoform extends Component {
  
  
    state = {
        _id:'',
        creationDate:'',
        location:'',
        userID:''

     
}


    constructor(props) {
        super(props);
        
    this.handleChange = this.handleChange.bind(this);
    this.datehandleChange = this.datehandleChange.bind(this);
    this._idhandleChange = this._idhandleChange.bind(this);
    this.locationhandleChange = this.locationhandleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({userID: event.target.value});
      }
    datehandleChange(event) {
        this.setState({creationDate: event.target.value});
      }
    locationhandleChange(event) {
        this.setState({location: event.target.value});
      }
    _idhandleChange(event) {
        this.setState({_id: event.target.value});
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
                    
                    User:
                    <select  onChange={this.handleChange}>
                                <option value="N2">Azote N2</option>
                                <option value="O2">Dioxygène O2</option>
                                <option value="Dioxyde de Carbone">CO2</option>
                                <option value="Autre Gaz">Autre Gaz</option>
                    </select>
                    
           </td>
           </tr>

           <tr> 
            <td>         
                    <label>
                    creation date :
                    <input type="date"  onChange={this.datehandleChange} style={{width:"70%", marginLeft:"1em"}} />
                    </label>
                    <label>
                    Location
                    <input type="Text"   onChange={this.locationhandleChange} style={{ width: "50%", marginLeft:"1em"}}/>
                    </label>
                    <label>
                    capteur id:
                    <input type="Text"   onChange={this._idlocationhandleChange} style={{ width: "50%", marginLeft:"1em"}}/>
                    </label>

              
               </td>
               </tr>     
                    <input type="submit" value="Ajouter" />
                    </form>
            </div>
        );
    }
}

export default Thermoform;