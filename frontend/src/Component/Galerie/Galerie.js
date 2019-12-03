import React, { Component } from 'react';
import camera1 from './camera1.jpg';
import camera2 from './camera2.jpg';
import camera3 from './camera3.jpg';
import '../Widget.css';

import ImageGallery from 'react-image-gallery';

import "react-image-gallery/styles/css/image-gallery.css";



class Galerie extends Component{
    render () {

        const images = [
            {
                original: camera1,
                thumbnail: camera1,
              },
              {
                original: camera2,
                thumbnail: camera2,
              },
              {
                original: camera3,
                thumbnail: camera3,
              },
          ];
          
           
          
      return (
        <div class= "widget">
        <ImageGallery  items={images} />
        </div>
      );
  }


}

export default Galerie;


