import React, { Component } from 'react';
import './Perso.css';
import image1 from './image1.jpg';


 

class Perso extends Component{
     
          render () {
      
      return (
        <div >
        <img class="roundedImage" src= {image1} alt="photo de moi"/> 
        <h1> MOTHER OF DRAGONS</h1>
        </div>
      );
  }


}

export default Perso;


