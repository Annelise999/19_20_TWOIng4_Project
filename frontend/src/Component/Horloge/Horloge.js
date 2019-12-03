import React, { Component }  from 'react';
import Clock from 'react-live-clock';
import "./Horloge.css";
 
class Horloge extends Component {
    render() {

        return (
            <div className= "heure">
                <p> HEURE </p>
        <Clock className = "heuree" format={'HH:mm:ss'} ticking={true} timezone={'FR'} />
            </div>
        );
    }
}

export default Horloge;