import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner2 from '../../../Image/carousel1.png'
import banner1 from '../../../Image/carousel2.png'

const Banner = () => {
    return (
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="First slide"
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
            alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Third slide"
    />

   
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;