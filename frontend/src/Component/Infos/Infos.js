import React, { Component } from 'react';
import "./Infos.css";
import '../Widget.css';
import axios from 'axios';


class Infos extends Component {

    state = {
        location: "",
        personsinHouse: 0,
        houseSize: "",
    }



    constructor(props) {
        super(props);
        const ID = this.props.ID
        var self = this;

        axios.get('http://localhost:3000/api/user', {
            params: {
                userId: props.ID
            }
        })
            .then(function (response) {

                self.setState({ location: response.data.location, personsinHouse: response.data.personsInHouse, houseSize: response.data.houseSize });
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    componentDidUpdate(prevProps) {

        if (prevProps.ID !== this.props.ID) {
            var self = this;
        axios.get('http://localhost:3000/api/user', {
            params: {
                userId: this.props.ID
            }
        })
            .then(function (response) {

                self.setState({ location: response.data.location, personsinHouse: response.data.personsInHouse, houseSize: response.data.houseSize });
            })
            .catch(function (error) {
                console.log(error);
            })
        }
        
      }

    render() {
        return (

            <div className="widget tableau">
                <table>

                    <tr>
                        <th>Sensor</th>
                        <th>Max Value</th>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td>{this.state.location} </td>
                    </tr>
                    <tr>
                        <td>Persons in House</td>
                        <td>{this.state.personsinHouse}</td>
                    </tr>
                    <tr>
                        <td>House size</td>
                        <td>{this.state.houseSize} </td>
                    </tr>
                </table>

            </div>


        );
    }
}

export default Infos;