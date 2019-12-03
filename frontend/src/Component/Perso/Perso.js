import React, { Component } from 'react';
import './Perso.css';
import image1 from './image1.jpg';


 

class Perso extends Component{
     
          render () {
      
      return (
        <div className="Profil" >
         
        <img class="roundedImage" src= {image1} alt="photo de moi"/>
    
    
      <h2> MOTHER OF DRAGONS</h2>
      
     
      </div>
      );
  }


}

export default Perso;


