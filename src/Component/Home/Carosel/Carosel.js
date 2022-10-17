import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import banner1 from '../../../Image/banner-1-2.jpg'
import banner2 from '../../../Image/Banner-2-2.jpg'
import banner3 from '../../../Image/banner-6-1.jpg'

const Carosel = () => {
    return (
       
      
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
         
    );
};

export default Carosel;