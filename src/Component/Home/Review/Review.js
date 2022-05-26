import React from 'react';
import Slider from 'react-slick';

const Review = () => {
     

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 5000,
        cssEase: "linear"
      };
   
     return (
        <div className='mt-5 mb-5'  >
            <div className='mt-3 ' >
            <h1 className=' text-4xl md:text-4xl  lg:text-6xl text-sky-500 flex justify-center '>Testimonials</h1>
            </div>
            <div className='divider mb-5'></div>
       
        <Slider {...settings}>
          <div>
            <h3 className='text-2xl '>Very Good Quality Product.   </h3>
            <h3>Jhon Abraham</h3>
            <h3>CEO- ALPHA Compnay</h3>
          </div>
          <div>
          <h3 className='text-2xl '>Good Quality Product.   </h3>
            <h3>Abraham Linkon</h3>
            <h3>CEO- AwsomeCart Compnay</h3>
          </div>
          <div>
          <h3 className='text-2xl '>Good Quality Product.I'm Impresed   </h3>
            <h3>Ching Marma </h3>
            <h3>CEO- Wohang Compnay</h3>
          </div>
          <div>
          <h3 className='text-2xl '> Product Quality Well Maintained.   </h3>
            <h3>Jhon wick</h3>
            <h3>CEO- Hammer Compnay</h3>
          </div>
          
        </Slider>
      </div>
          );
    
};

export default Review;