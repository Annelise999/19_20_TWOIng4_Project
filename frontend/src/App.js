import React, {Component} from 'react';
import './App.css';
//import Gallery from "./Component/Gallery/Gallery";
import Galerie from "./Component/Galerie/Galerie";
import BarC from "./Component/BarC/BarC";
import Cam from "./Component/Cam/Cam";
import Perso from "./Component/Perso/Perso";


class App extends Component{
  render(){

      
return (
<div class= "dashboard">
<div class= "col1">
  <Perso> </Perso>
<p> Salut c'est moi je suis Anne-Lise</p>

<Galerie> </Galerie>
</div>

<div class= "col2">

 HELLO !!
<BarC></BarC>
<Cam></Cam>

</div>
</div>

);
     
  }
  
}

export default App;
