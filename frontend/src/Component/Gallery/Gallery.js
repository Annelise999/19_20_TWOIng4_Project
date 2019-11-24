import React, { Component } from 'react';
import FluidGallery from 'react-fluid-gallery';
import camera1 from './camera1.jpg';
import camera2 from './camera2.jpg';
import camera3 from './camera3.jpg';
import './Gallery.css';


class Gallery extends Component{
    render () {

      return (
        <FluidGallery 
          className= "gallery"
          style={{ width: '30vw', height: '30vh' }}
          slides={[ camera1, camera2, camera3 ]}
        />
      )
  }


}

export default Gallery;


