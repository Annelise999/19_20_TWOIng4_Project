import React, { Component }  from 'react';
import Clock from 'react-live-clock';
import "./Horloge.css";
 
class Horloge extends Component {
    render() {

        return (
            <div class= "heure">
                <h2 class="h"> HEURE </h2>
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'FR'} />
            </div>
        );
    }
}

export default Horloge;