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
            <h1 className=' text-xl md:text-2xl  lg:text-4xl text-sky-500 flex justify-center ' style={{fontWeight: "800"}}>Also Available On</h1>
            </div>
            <div className='divider mb-5'></div>
       
        <Slider {...settings}>
          <div>
          <img class="logo-bar__image lazyloaded" data-src="//cdn.shopify.com/s/files/1/0337/7102/8616/files/Paytm-Mall_85e3ba26-a9ef-4cd2-8a80-7731be5879ca_300x.jpg?v=1609934678" alt="Paytm true wireless earbuds and bluetooth wireless earbuds" src="//cdn.shopify.com/s/files/1/0337/7102/8616/files/Paytm-Mall_85e3ba26-a9ef-4cd2-8a80-7731be5879ca_300x.jpg?v=1609934678"/>
          </div>
          <div>
          <img class="logo-bar__image lazyloaded" data-src="//cdn.shopify.com/s/files/1/0337/7102/8616/files/Reliance-digital_300x.png?v=1634819117" alt="Hammer X Reliance Digital" src="//cdn.shopify.com/s/files/1/0337/7102/8616/files/Reliance-digital_300x.png?v=1634819117"/>
          </div>
          <div>
          <img class="logo-bar__image lazyloaded" data-src="//cdn.shopify.com/s/files/1/0337/7102/8616/files/Amazon_300x.jpg?v=1609934554" alt="amazon true wireless earbuds" src="//cdn.shopify.com/s/files/1/0337/7102/8616/files/Amazon_300x.jpg?v=1609934554"/>
          </div>
          <div>
          <img class="logo-bar__image lazyloaded" data-src="//cdn.shopify.com/s/files/1/0337/7102/8616/files/Myntra_300x.jpg?v=1609934603" alt="myntra wireless headphones" src="//cdn.shopify.com/s/files/1/0337/7102/8616/files/Myntra_300x.jpg?v=1609934603"/>
          </div>
          
        </Slider>
      </div>
          );
    
};

export default Review;