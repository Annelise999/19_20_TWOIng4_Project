import React, { Component } from 'react';


class Camform extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            pourcentage:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value, pourcentage:event.target.pourcentage});
      }
    
      handleSubmit(event) {
        alert('Les informations ont bien été prises en compte pour ' + this.state.value);
        event.preventDefault();
      }



    render() {
        return (
            <div className="Camform">
                
                <h3>Formulaire pour Cam</h3>
                
                <form onSubmit={this.handleSubmit}>
                    <label>
                    choisissez votre suspect:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="Colonel Moutarde">Colonel Moutarde</option>
                        <option value="Professeur violet">Professeur violet</option>
                        <option value="Mademoiselle Rose">Mademoiselle Rose</option>
                        <option value="Madame Pervenche">Madame Pervenche</option>
                    </select>
                    </label>

                    <label>
                    Pourcentage:
                    <input type="number" value={this.state.pourcentage} onChange={this.handleChange} />
                    </label>


                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Camform;