import React, { Component } from 'react';
import "../../App.css";
import axios from 'axios';

class Deleteuserform extends Component {
   
   
    state = {
        _id:'',
        location:'',
        personsInHouse:'',
        houseSize:''
    
     
    }
    
    
    
    constructor(props) {
    super(props);
    
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}
   
   
    handleChange(event) {
        this.setState({personsInHouse: event.target.value});
      }
    
      handleSubmit(event) {
        event.preventDefault();

        var requestBody = {
            _id: this.state._id,
            location: this.state.location,
            personsInHouse: this.state.personsInHouse,
            houseSize: this.state.houseSize,

    }

            axios.post('http://localhost:3000/api/user',requestBody)
            .then(res => {
            console.log(requestBody);
            console.log(res.data);
            }
            )

      }
   
    render() {
        return (
            <div className="Formulaire">
            <h3>Supprimer un User</h3>

                    <form onSubmit={this.handleSubmit}>
            <tr> 
            <td>     

                    User:
                    <select  onChange={this.handleChange} style={{marginLeft:"1em"}}>
                                <option value="N2">Azote N2</option>
                                <option value="O2">Dioxygène O2</option>
                                <option value="Dioxyde de Carbone">CO2</option>
                                <option value="Autre Gaz">Autre Gaz</option>
                    </select>

                 


            </td>
            </tr>     
                    <input type="submit" value="Supprimer" />
                    </form>
            </div>
        );
    }
}

export default Deleteuserform;
