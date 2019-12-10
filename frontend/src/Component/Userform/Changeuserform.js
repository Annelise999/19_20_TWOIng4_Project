import React, { Component } from 'react';
import "../../App.css";
import axios from 'axios';

class Changeuserform extends Component {
    
     
  state = {
    _id:'',
    location:'',
    personsInHouse:'',
    houseSize:''

 
}
    
constructor(props) {
    super(props);
    
this.handleChange = this.handleChange.bind(this);
this.HousehandleChange = this.HousehandleChange.bind(this);
this.locationhandleChange = this.locationhandleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
    this.setState({personsInHouse: event.target.value});
  }

locationhandleChange(event) {
    this.setState({location: event.target.value});
  }
HousehandleChange(event) {
    this.setState({houseSize: event.target.value});
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
                                <h3>Modifier un User</h3>
                    
                    <form onSubmit={this.handleSubmit}>

        <tr> 
            <td>     
               
                    User à modifier:
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
                    People in House :
                    <input type="number"  onChange={this.handleChange} style={{width:"30%", marginLeft:"1em"}} />
                    </label>
                    <label>
                    Location
                    <input type="Text"   onChange={this.locationhandleChange} style={{ width: "50%", marginLeft:"1em"}}/>
                    </label>
                    <label>
                    House Size:
                    <input type="Text"   onChange={this.HouselocationhandleChange} style={{ width: "50%", marginLeft:"1em"}}/>
                    </label>

              
               </td>
               </tr>     
                    <input type="submit" value="Modifier" />
                    </form> 
            </div>
        );
    }
}

export default Changeuserform;