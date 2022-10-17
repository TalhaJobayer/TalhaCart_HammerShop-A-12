import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import banner from '../../../Image/pexels-anamul-rezwan-1216589.jpg'


const Banner = () => {
    return (
      <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={banner} className="Width  rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">TOOLS MANUFACTURER  <span style={{color:" #fa832a"}}>-TalhaCart</span></h1>
          <p className="py-6">We feel immense pleasure to introduce ourselves as one of the leading manufacturers of hand tools in Bangladesh since 2020. TalhaCart Industries’ tools are produced from top quality materials manipulating state-of-art techniques. This permits maximum degree of safety, comfort, and user-friendliness to ensure that you benefit from unique innovative advantage as per our company’s compliances. We supply our hand tools to individual craftsman and large distributors throughout the world. We concentrate to meet your expectations in spite of your purchase volume. Our international presence in countries makes us prominent in the world of hand tools.</p>
          
        </div>
      </div>
    </div>
    );
};

export default Banner;